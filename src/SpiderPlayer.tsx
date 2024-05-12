import { useState } from "react";
import spiderIdle from "./assets/images/characters/main/idle (main).gif";
import spiderWalking from "./assets/images/characters/main/walking (main).gif";

export function SpiderPlayer({pageNum, changePageNumber}: {pageNum: number, changePageNumber: Function}): JSX.Element{
    const [xCordPercent, changeXCord] = useState<number>(0);
    const [facingRight, changeFacingRight] = useState<boolean>(false); //0 is left, 1 is right
    const [currImg, changeCurrImg] = useState<string>(spiderIdle);
    
    const speed: number = .5;
    const spiderWidthPercent: number = 10;

    //-1 = left, 1 = right
    function updateXCord(direction: number){
        changeXCord(xCordPercent + (speed * direction));

        //Instead of left and right bounds, hitting borders changes pages
        if(xCordPercent + (speed * direction) > 100 - spiderWidthPercent){ //If the spider would go over the right side (its left plus is greater than the right side of the document minus the spider's width), set it to be located so that it is stopped at the right side
            if(pageNum < 7){
                changeXCord(0);
                changePageNumber(pageNum + 1);
            }
            else{
                changeXCord(100 - spiderWidthPercent);
            }

        }
        else if(xCordPercent + (speed * direction) < 0){ //If the spider would go over the left side, stop it
            if(pageNum > 1){
                changeXCord(100 - spiderWidthPercent);
                changePageNumber(pageNum - 1);
            }
            else{
                changeXCord(0);
            }
            
        }

        //Simpler working left and right bounds
        /*
        if(xCordPercent + (speed * direction) > 100 - spiderWidthPercent){ //If the spider would go over the right side (its left plus is greater than the right side of the document minus the spider's width), set it to be located so that it is stopped at the right side
            changeXCord(100 - spiderWidthPercent)
        }
        else if(xCordPercent + (speed * direction) < 0){ //If the spider would go over the left side, stop it
            changeXCord(0);
        }
        */

        /*//Working left and right bounds
        if(((xCordPercent/100)*document.body.clientWidth) + (speed * direction) > document.body.clientWidth - (document.body.clientWidth * (spiderWidthPercent/100))){ //If the spider would go over the right side (its left plus is greater than the right side of the document minus the spider's width), set it to be located so that it is stopped at the right side
            changeXCord(100 - spiderWidthPercent)
        }
        else if(xCordPercent + (speed * direction) < 0){ //If the spider would go over the left side, stop it
            changeXCord(0);
        }
        */
    }

    document.onkeydown = function(event){
        if(event.keyCode === 37){
            updateXCord(-1);
            changeCurrImg(spiderWalking);
            changeFacingRight(false);
        }
        else if(event.keyCode === 39){
           updateXCord(1);
           changeCurrImg(spiderWalking);
           changeFacingRight(true);
        }
        else{
            updateXCord(0);
        }
    }

    document.onkeyup = function(event){
        if(event.keyCode === 37){
            changeCurrImg(spiderIdle);
        }
        else if(event.keyCode === 39){
            changeCurrImg(spiderIdle);
        } 
    }

    function tempy(){
        console.log(document.getElementById("player_spider")!.style.right)
    }
    window.onload = tempy;

    return(
        <div style={{width: "100%", maxWidth: "100%"}}>
            <img src={currImg} id="player_spider" className={"Player-" + pageNum.toString()} alt={"player spider img"} style={{position: "absolute", width: spiderWidthPercent.toString() + "%", height: "7.5%", left:xCordPercent.toString() + "%", transform:"scaleX(" + ((-1 * Number(facingRight)) + Number(!facingRight)).toString() +")"}}></img>
        </div>
    );
    // (-1 * Number(facingRight)) + Number(!facingRight)     gives -1 if facing right and 1 if facing left (for scaleX function)
}

//<img src={currImg} id="player_spider" className={"Player-" + pageNum.toString()} alt={"player spider img"} style={{position: "absolute", width: "10%", height: "7.5%", left:"min(" + xCord.toString() + "%, 90%)", transform:"scaleX(" + ((-1 * Number(facingRight)) + Number(!facingRight)).toString() +")"}}></img>
//left:"min(" + xCord.toString() + "%, 90%)" prevents the spider from going over the right edge of the screen but doesn't prevent xCord from increasing, so it takes a while to walk back and the spider looks like it's staying in place, so this method shouldn't be used.

