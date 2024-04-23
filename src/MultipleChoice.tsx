import React, { useState } from 'react';
import "./MultipleChoice.css"
import { Button, Form } from 'react-bootstrap';
import { basicQuestionProps } from './Background';


export function MultipleChoice({question, answers, pageNum, selectedAnswers, changeAnswer, completionAmount, changeCompletionAmount}: basicQuestionProps): JSX.Element{

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        //Replace the current answer in selectedAnswer with the newly selected answer, at the index tat corresponds to the page number.
        let tempArray: string[] = [...selectedAnswers];
        tempArray.splice(pageNum - 1, 1, event.target.value);
        changeAnswer(tempArray);

        //Note that because the answered questions array is a state, and state is not re-rendered until the end of the scope of the function it is changed in (in this case updateAnswer), 
        //the array still has the empty string for this question if it hasn't been answered before now, and can be used to increase the progress amount.
        if(selectedAnswers[pageNum - 1] === ""){
            changeCompletionAmount(completionAmount + 1);
        }
    }

    //Return the question and radio button answer options. The checked box is the answer stored in selectedAnswers.
    return(
        <div
            data-testid="multichoice-question"
            className = "Multiple-Choice-Question"
        >
            <h3>{question}</h3>
            {answers.map((answer: string) => (
                <Form.Check
                    key = {answer}
                    type = "radio"
                    name = "Select Answer"
                    onChange = {updateAnswer}
                    label = {answer}
                    value = {answer}
                    checked = {selectedAnswers[pageNum - 1] === answer}
                >
                    {} 
                </Form.Check>
            ))}
            {selectedAnswers[pageNum - 1]} 
        </div>
    );
}
