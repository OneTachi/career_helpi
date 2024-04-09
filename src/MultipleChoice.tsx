import React, { useState } from 'react';
import './App.css';
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
            style={{
                width: "10%",
                height: "10%",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "50px",
                opacity: 64
                
        }}
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
