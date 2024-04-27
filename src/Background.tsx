import React, { useState } from 'react';
import './Background.css';
import { Button } from 'react-bootstrap';
import { MultipleChoice } from './MultipleChoice';
import { questions } from './basicQuestions';
import { answers } from './basicQuestions';
import { ProgressBar } from './ProgressBar';
import { Results } from './Results';

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

    completionAmount: number;
    changeCompletionAmount: (newAmount: number) => void;
}

//selectedAnswers is an array of the basic question multiple choice answers that have been selected, and is used to save the responses to each quetsion on different pages.
//pageNumber - 1 in the array is the user's answer to that question.
//
//completionAmount is how many questions have been answered so far.
//pageNumber is the page/question number of the quiz that the user is on.
export function Background({quizType}: {quizType: string}): JSX.Element{
    const [pageNumber, changePageNumber] = useState<number>(1);
    const [completionAmount, changeCompletionAmount] = useState<number>(0);
    const [selectedAnswers, changeAnswer] = useState<string[]>(["", "", "", "", "", "", ""]);

    const backgrounds = [insideHouse, forest, forest, forest, forest, waterfall, waterfall];

    function updateCompletionAmount(){ //technically no longer need this function now that the question pages use props to update the amount completed so far, but keeping it because it could be useful later.
        changeCompletionAmount(7 - selectedAnswers.filter((answer: string): boolean => answer === "").length);
    }

    return(
        <div onMouseMove={updateCompletionAmount}>
            {quizType === "results" ? 
                <Results fields={["a, b, c"]} jobs={[["a1, b1, c1"], ["a2, b2, c2"], ["a3, b3, c3"]]} descriptions={[["ad1, bd1, cd1"], ["ad2, bd2, cd2"], ["ad3, bd3, cd3"]]}></Results> 
                : quizType === "basic" ?
                    <MultipleChoice question={questions[pageNumber - 1]} answers={answers[pageNumber - 1]} pageNum = {pageNumber} selectedAnswers={selectedAnswers} changeAnswer={changeAnswer} completionAmount = {completionAmount} changeCompletionAmount={changeCompletionAmount}></MultipleChoice> 
                    : <div>Detailed</div>
            }
            
            
            <ChangePage pageNumber={pageNumber} changePageNumber={changePageNumber}></ChangePage>
            
            <img src = {backgrounds[pageNumber - 1]} alt = "Background Img" className="Background-Image"></img>
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
    //const spiderImg = "";
    
    return(
        <div
            style = {{}}
        >
        </div>
    );
}