import React, { useState } from 'react';
import './Background.css';
import { Button, Form } from 'react-bootstrap';
import { MultipleChoice } from './MultipleChoice';

import forest from "./assets/images/backgrounds/forest.png"


interface changePageProps{
    pageNumber: number;
    changePageNumber: (newPageNumber: number) => void;
}

export function Background({quizType}: {quizType: string}): JSX.Element{
    const [pageNumber, changePageNumber] = useState<number>(1);
    const [backgroundImage, changeBackgroundImage] = useState<string>(forest); //Background image probably doesn't need its own state and could likely just be gotten from a const array using page number

    function updateBackground(){

    }

    return(
        <div>
            <MultipleChoice question={"Question"} answers={["Answer 1aaaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaa aaaaa", "Answer 2", "Answer 3", "Answer 4"]}></MultipleChoice>
            <img src = {forest} alt = {"Forest background"} className="Background-Image"></img>
        </div>
    );
}

export function ChangePage({pageNumber, changePageNumber}: changePageProps): JSX.Element{
    return(
        <div>
            <Button onClick = {() => pageNumber > 1 ? changePageNumber(pageNumber - 1) : ""}>
                {"<- Back"}
            </Button>
            <Button onClick = {() => pageNumber < 7 ? changePageNumber(pageNumber + 1) : ""}>
                {"Next ->"}
            </Button>
        </div>
    );
}

export function Spider(): JSX.Element{
    const spiderImg = "";
    
    return(
        <div
            style = {{}}
        >
        </div>
    );
}