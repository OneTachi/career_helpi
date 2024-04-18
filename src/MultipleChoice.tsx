import React, { useState } from 'react';
import "./MultipleChoice.css"
import { Button, Form } from 'react-bootstrap';


export function MultipleChoice({question, answers, pageNum}: {question: string, answers: string[], pageNum: number}): JSX.Element{
    //Temporary values until we have real questions
    const [selectedAnswers, changeAnswer] = useState<string[]>([""]);

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        let tempArray: string[] = selectedAnswers.map((answer: string) => answer);
        tempArray[pageNum - 1] = event.target.value;
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
