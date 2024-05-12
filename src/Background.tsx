import React, { useState } from 'react';
import './Background.css';
import { Button } from 'react-bootstrap';
import { MultipleChoice } from './MultipleChoice';
import { questions } from './basicQuestions';
import { answers } from './basicQuestions';
import { ProgressBar } from './ProgressBar';
import { Results } from './Results';
import { requestCareers } from './Api';
import { QuizType } from "./interfaces/page";
import { SpiderPlayer } from './SpiderPlayer';

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

    completionAmount: number;

    pageType: string;
    updatePageType: (newType: string, quizType: string, apiKey: string) => void;
    
    getUnfinishedQuestionsString: () => string;

    quizType: string;
    apiKey: string;
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
export function Background({quizType, apiKey}: {quizType: string, apiKey: string}): JSX.Element{
    const [pageType, changePageType] = useState<string>(quizType);
    const [pageNumber, changePageNumber] = useState<number>(1);
    const [completionAmount, changeCompletionAmount] = useState<number>(0);
    const [selectedAnswers, changeAnswer] = useState<string[]>(["", "", "", "", "", "", ""]);

    const [fields, changeFields] = useState<string[]>([]);
    const [jobs, changeJobs] = useState<string[][]>([]);
    const [descriptions, changeDescriptions] = useState<string[][]>([]);

    const backgrounds = [insideHouse, forest, forest, forest, forest, waterfall, waterfall, garden];



    function updatePageType(newType: string, quizType: string, apiKey: string){
        if(newType === "results"){
            getJobsFromAi(quizType, apiKey);
        }
        
        changePageType(newType);
    }

    //Call this to update the completion amount
    /*
    function updateCompletionAmount(){ //technically no longer need this function now that the question pages use props to update the amount completed so far, but keeping it because it could be useful later.
        changeCompletionAmount(7 - selectedAnswers.filter((answer: string): boolean => answer === "").length);
    }
    */

    //Get 3 Careers and 3 jobs and their descriptions from each career from the chatGPT api
    async function getJobsFromAi(quizType: string, apiKey: string){
        let typeOfQuiz: QuizType;

        if(quizType === "basic"){
          typeOfQuiz = 'basic';
        }
        else{
            typeOfQuiz = 'detailed';
        }

        let tempFields: string[] = [];
        let tempJobs: string[][] = [];
        let tempDescriptions: string[][] = [];


        let newCareer: string[] = await requestCareers(apiKey, typeOfQuiz);
        tempFields.push(newCareer[3]);
        tempJobs.push(["a", "b", "c"]);
        tempDescriptions.push([newCareer[0], newCareer[1], newCareer[2]]);

        console.log("done 1");

        newCareer = await requestCareers(apiKey, typeOfQuiz);
        tempFields.push(newCareer[3]);
        tempJobs.push(["a", "b", "c"]);
        tempDescriptions.push([newCareer[0], newCareer[1], newCareer[2]]);
        
        console.log("done 2");

        newCareer = await requestCareers(apiKey, typeOfQuiz);
        changeFields([...tempFields, newCareer[3]]);
        changeJobs([...tempJobs, ["a", "b", "c"]]);
        changeDescriptions([...tempDescriptions, [newCareer[0], newCareer[1], newCareer[2]]]);

        console.log("done 3");
    }

    //Returns the string that tells the user how many questions are unfinished
    function getUnfinishedQuestionsString(): string{
        let answers: string[] = [...selectedAnswers];
        let prnt: string = "Please fully answer question(s) ";
        let currPageNum: number = 1;
        let unfinishedPageNums: string[] = [];

        answers.map((answer: string) => {
            /*  //This would work for every question if it wasn't for detailed question 2 needing to have exactly 3 boxes checked to be completed
            if(answer === ""){
                unfinishedPageNums.push(currPageNum.toString());
            }
            */

            if(pageType === "detailed" && currPageNum === 2 && answers[1].split(",").length !== 3){ //Need this if statement to make sure exactly 3 boxes are selected for detailed question 2 when deciding if question 2 is complete (otherwise this if statement would be removed and the if statement above it would simply work for all questions
                unfinishedPageNums.push(currPageNum.toString());
            }
            else if(answer === "" && (pageType !== "detailed" || currPageNum !== 2)){
                unfinishedPageNums.push(currPageNum.toString());
            }
            
            currPageNum += 1;

            return null;
        });

        if(unfinishedPageNums.length <= 2){
            prnt += unfinishedPageNums.join(" and ").toString();
        }
        else{
            prnt += unfinishedPageNums.join(", ").toString();
            prnt = prnt.substring(0, prnt.lastIndexOf(",") + 1) + " and " + prnt.substring(prnt.lastIndexOf(",") + 1); //Replace the last comma with ", and"
        }
        return(prnt);
    }

    return(
        <div style={{overflow:"hidden", position:"relative"}}>
            {pageType === "results" ? 
                <Results fields={fields} jobs={jobs} descriptions={descriptions}></Results> 
                : pageType === "basic" ?
                    <MultipleChoice question={questions[pageNumber - 1]} answers={answers[pageNumber - 1]} pageNum = {pageNumber} selectedAnswers={selectedAnswers} changeAnswer={changeAnswer} completionAmount = {completionAmount} changeCompletionAmount={changeCompletionAmount}></MultipleChoice> 
                    : getDetailedPage({pageNumber, selectedAnswers, changeAnswer, completionAmount, changeCompletionAmount})
            }
            {pageType !== "results" ? <img src = {backgrounds[pageNumber - 1]} id="back_image" alt = "Background Img" className="Background-Image"></img> : <img src = {garden} alt = "Results Background Img" className="Background-Image"></img>}
            {pageType !== "results" ? <ChangePage pageNumber={pageNumber} changePageNumber={changePageNumber} completionAmount = {completionAmount} pageType={pageType} updatePageType={updatePageType} getUnfinishedQuestionsString={getUnfinishedQuestionsString} quizType={quizType} apiKey={apiKey}></ChangePage> : ""}
            {pageType !== "results" ? <ProgressBar amountCompleted={completionAmount}></ProgressBar> : ""}

            {pageType !== "results" && <SpiderPlayer pageNum={pageNumber} changePageNumber={changePageNumber}></SpiderPlayer>}
        </div>
    );
}

export function ChangePage({pageNumber, changePageNumber, completionAmount, pageType, updatePageType, getUnfinishedQuestionsString, quizType, apiKey}: changePageProps): JSX.Element{
    const [quizUnfinished, changeQuizUnfinished] = useState<boolean>(false);

    function updateQuizUnfinished(isUnfinished: boolean){
        changeQuizUnfinished(isUnfinished);

        if(isUnfinished){
            alert(getUnfinishedQuestionsString())
        }

        if(!isUnfinished && completionAmount === 7){
            updatePageType("results", quizType, apiKey);
        }
    }

    return(
        <div>
            {pageNumber > 1 && <Button className="Back-Button" onClick={() => changePageNumber(pageNumber - 1)}>
                {"< Back"}
            </Button>}
            {pageNumber < 7 && <Button className="Next-Button" onClick={() => changePageNumber(pageNumber + 1)}>
                {"Next >"}
            </Button>}

            <Button className="Finish-Button" onClick={() => completionAmount === 7 ? updateQuizUnfinished(false) : updateQuizUnfinished(true)}>
                {"Finish"}
            </Button>

            {quizUnfinished && <>{updateQuizUnfinished(false)}</>}
        </div>
    );

    /* //Original quiz page buttons (fully working). The difference is, the above version doesn't show the back or next buttons on pages 1 and 7 respectively
    return(
        <div>
            <Button className="Back-Button" onClick={() => pageNumber > 1 ? changePageNumber(pageNumber - 1) : ""}>
                {"< Back"}
            </Button>
            <Button className="Next-Button" onClick={() => pageNumber < 7 ? changePageNumber(pageNumber + 1) : ""}>
                {"Next >"}
            </Button>
            <Button className="Finish-Button" onClick={() => completionAmount === 7 ? updateShowUnfinishedString(false) : updateShowUnfinishedString(true)}>
                {"Finish"}
            </Button>

            {showUnfinishedString && <>{}</> && <>{updateShowUnfinishedString(false)}</>}
        </div>
    );
    */
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