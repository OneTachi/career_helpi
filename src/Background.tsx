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
import garden from "./assets/images/backgrounds/garden.png"

import { DetailedQ1 } from './DetailedQ1';
import { DetailedQ2 } from './DetailedQ2';
import { DetailedQ3 } from './DetailedQ3';
import { DetailedQ4 } from './DetailedQ4';
import { DetailedQ5 } from './DetailedQ5';
import { DetailedQ6 } from './DetailedQ6';
import { DetailedQ7 } from './DetailedQ7';


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

export interface detailedQuestionProps{
    pageNumber: number;
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

    //Call this to update the completion amount
    function updateCompletionAmount(){ //technically no longer need this function now that the question pages use props to update the amount completed so far, but keeping it because it could be useful later.
        changeCompletionAmount(7 - selectedAnswers.filter((answer: string): boolean => answer === "").length);
    }

    return(
        //<div onMouseMove={updateCompletionAmount}>
        <div>
            {quizType === "results" ? 
                <Results fields={["a", "b", "c"]} jobs={[["a1", "a2", "a3"], ["b1", "b2", "b3"], ["c1", "c2", "c3"]]} descriptions={[["ad1", "ad2", "ad3"], ["bd1", "bd2", "bd3"], ["cd1", "cd2", "cd3"]]}></Results> 
                : quizType === "basic" ?
                    <MultipleChoice question={questions[pageNumber - 1]} answers={answers[pageNumber - 1]} pageNum = {pageNumber} selectedAnswers={selectedAnswers} changeAnswer={changeAnswer} completionAmount = {completionAmount} changeCompletionAmount={changeCompletionAmount}></MultipleChoice> 
                    : getDetailedPage({pageNumber, selectedAnswers, changeAnswer, completionAmount, changeCompletionAmount})
            }
            {quizType !== "results" ? <img src = {backgrounds[pageNumber - 1]} alt = "Background Img" className="Background-Image"></img> : <img src = {garden} alt = "Results Background Img" className="Background-Image"></img>}
            {quizType !== "results" ? <ChangePage pageNumber={pageNumber} changePageNumber={changePageNumber}></ChangePage> : ""}
            {quizType !== "results" ? <ProgressBar amountCompleted={completionAmount}></ProgressBar> : ""}
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

function getDetailedPage({pageNumber: pageNum, selectedAnswers, changeAnswer, completionAmount, changeCompletionAmount}: detailedQuestionProps): JSX.Element{
    switch(pageNum){
        case 1: {return(<DetailedQ1 pageNumber = {pageNum} selectedAnswers={selectedAnswers} changeAnswer={changeAnswer} completionAmount = {completionAmount} changeCompletionAmount={changeCompletionAmount}></DetailedQ1>)}
        case 2: {return(<DetailedQ2 pageNumber = {pageNum} selectedAnswers={selectedAnswers} changeAnswer={changeAnswer} completionAmount = {completionAmount} changeCompletionAmount={changeCompletionAmount}></DetailedQ2>)}
        case 3: {return(<DetailedQ3 pageNumber = {pageNum} selectedAnswers={selectedAnswers} changeAnswer={changeAnswer} completionAmount = {completionAmount} changeCompletionAmount={changeCompletionAmount}></DetailedQ3>)}
        case 4: {return(<DetailedQ4 pageNumber = {pageNum} selectedAnswers={selectedAnswers} changeAnswer={changeAnswer} completionAmount = {completionAmount} changeCompletionAmount={changeCompletionAmount}></DetailedQ4>)}
        case 5: {return(<DetailedQ5 pageNumber = {pageNum} selectedAnswers={selectedAnswers} changeAnswer={changeAnswer} completionAmount = {completionAmount} changeCompletionAmount={changeCompletionAmount}></DetailedQ5>)}
        case 6: {return(<DetailedQ6 pageNumber = {pageNum} selectedAnswers={selectedAnswers} changeAnswer={changeAnswer} completionAmount = {completionAmount} changeCompletionAmount={changeCompletionAmount}></DetailedQ6>)}
        case 7: {return(<DetailedQ7 pageNumber = {pageNum} selectedAnswers={selectedAnswers} changeAnswer={changeAnswer} completionAmount = {completionAmount} changeCompletionAmount={changeCompletionAmount}></DetailedQ7>)}
    }

    return<div>ERROR</div> //Should never occur
        
         

}