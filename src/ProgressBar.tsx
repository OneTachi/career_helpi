import React, { useState } from 'react';
import miniWeb0 from "./assets/images/objects/progress bar/progressWeb0.png";
import miniWeb1 from "./assets/images/objects/progress bar/progressWeb1.png";
import miniWeb2 from "./assets/images/objects/progress bar/progressWeb2.png";
import miniWeb3 from "./assets/images/objects/progress bar/progressWeb3.png";
import miniWeb4 from "./assets/images/objects/progress bar/progressWeb4.png";
import miniWeb5 from "./assets/images/objects/progress bar/progressWeb5.png";
import miniWeb6 from "./assets/images/objects/progress bar/progressWeb6.png";
import miniWeb7 from "./assets/images/objects/progress bar/progressWeb7.png";
import "./assets/css/ProgressBar.css"

export function ProgressBar({amountCompleted}: {amountCompleted: number}): JSX.Element{
    const progressBarWebs = [miniWeb0, miniWeb1, miniWeb2, miniWeb3, miniWeb4, miniWeb5, miniWeb6, miniWeb7];
    const [isHovering, changeHovering] = useState<boolean>(false);

    function setToHovering(){
        changeHovering(true);
    }

    function setToNotHovering(){
        changeHovering(false);
    }

    //Progress bar in the form of a spider web that gets bigger as the quiz is completed.
    // On hover, the amount of the quiz that has been completed so far appears on top of the spider web image.
    return(
        <div className = "Progress-Bar" onMouseOver = {setToHovering} onMouseLeave = {setToNotHovering}>
            <img src={progressBarWebs[amountCompleted]} alt = "Progress Bar Web Img" className = "Web-Image"></img>

            {!isHovering ? 
            <div className = "Amount-Completed">{"" + amountCompleted + "/7"}</div> :
            <div>{/*"Replace this div with the image to have it swap between the image and completion count instead of overlaying them"*/}</div>
            }

            {/*amountCompleted*/}
        </div>
    )
}