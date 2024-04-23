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

export interface basicQuestionProps{
    question: string;
    answers: string[];
    pageNum: number;
    selectedAnswers: string[];
    changeAnswer: (newAnswer: string[]) => void;
}

export function Background({quizType}: {quizType: string}): JSX.Element{
    const [pageNumber, changePageNumber] = useState<number>(1);
    const [completionAmount, changeCompletionAmount] = useState<number>(0);
    const [selectedAnswers, changeAnswer] = useState<string[]>(["", "", "", "", "", "", ""]);

    const backgrounds = [insideHouse, forest, forest, forest, forest, waterfall, waterfall];

    function updateCompletionAmount(){
        changeCompletionAmount(7 - selectedAnswers.filter((answer: string): boolean => answer === "").length);
    }


    return(
        <div onMouseOver={updateCompletionAmount}>
            {quizType === "basic" ? <MultipleChoice question={questions[pageNumber - 1]} answers={answers[pageNumber - 1]} pageNum = {pageNumber} selectedAnswers={selectedAnswers} changeAnswer={changeAnswer}></MultipleChoice> : <div>Detailed</div>}
            <ChangePage pageNumber={pageNumber} changePageNumber={changePageNumber}></ChangePage>
            
            <img src = {backgrounds[pageNumber - 1]} alt = "Background image" className="Background-Image"></img>
            <ProgressBar amountCompleted={completionAmount}></ProgressBar>
            
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