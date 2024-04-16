import React, { useState } from 'react';
import "./MultipleChoice.css"
import { Button, Form } from 'react-bootstrap';


export function MultipleChoice({question, answers}: {question: string, answers: string[]}): JSX.Element{
    //Temporary values until we have real questions
    const [selectedAnswer, changeAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        changeAnswer(event.target.value);
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
                    checked = {selectedAnswer === answer}
                >
                    {} 
                </Form.Check>
            ))}
            {selectedAnswer} 
        </div>
    );
}