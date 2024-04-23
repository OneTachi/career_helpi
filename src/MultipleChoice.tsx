import React, { useState } from 'react';
import "./MultipleChoice.css"
import { Button, Form } from 'react-bootstrap';
import { basicQuestionProps } from './Background';


export function MultipleChoice({question, answers, pageNum, selectedAnswers, changeAnswer}: basicQuestionProps): JSX.Element{
    //const [selectedAnswers, changeAnswer] = useState<string[]>([""]);

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        let tempArray: string[] = [...selectedAnswers];
        tempArray.splice(pageNum - 1, 1, event.target.value);
        changeAnswer(tempArray);
    }

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
