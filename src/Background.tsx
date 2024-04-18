import React, { useState } from 'react';
import './Background.css';
import { Button, Form } from 'react-bootstrap';
import { MultipleChoice } from './MultipleChoice';
import { questions } from './basicQuestions';
import { answers } from './basicQuestions';
import { ProgressBar } from './ProgressBar';

import forest from "./assets/images/backgrounds/forest.png"
import insideHouse from "./assets/images/backgrounds/insideHouse.png"
import waterfall from "./assets/images/backgrounds/waterfall.gif"


interface changePageProps{
    pageNumber: number;
    changePageNumber: (newPageNumber: number) => void;
}

export function Background({quizType}: {quizType: string}): JSX.Element{
    const [pageNumber, changePageNumber] = useState<number>(1);
    const [backgroundImage, changeBackgroundImage] = useState<string>(forest); //Background image probably doesn't need its own state and could likely just be gotten from a const array using page number

    const backgrounds = [insideHouse, forest, forest, forest, forest, waterfall, waterfall]


    return(
        <div>
            {quizType === "basic" ? <MultipleChoice question={questions[pageNumber - 1]} answers={answers[pageNumber - 1]} pageNum = {pageNumber}></MultipleChoice> : <div>Detailed</div>}
            <ChangePage pageNumber={pageNumber} changePageNumber={changePageNumber}></ChangePage>
            {/*pageNumber*/}
            <img src = {backgrounds[pageNumber - 1]} alt = {"Background image"} className="Background-Image"></img>
            <ProgressBar pageNum={pageNumber}></ProgressBar>
            
        </div>
    );
}

export function ChangePage({pageNumber, changePageNumber}: changePageProps): JSX.Element{
    return(
        <div>
            <Button className="Back-Button" onClick={() => pageNumber > 1 ? changePageNumber(pageNumber - 1) : ""}>
                {"< Back"}
            </Button>
            <Button className="Next-Button" onClick={() => pageNumber < 7 ? changePageNumber(pageNumber + 1) : ""}>
                {"Next >"}
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