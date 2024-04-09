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
            className = "Multiple-Choice-Question"
            style={{
                //width: "10%,
                width: "10% !important", //When this div is placed in a parent element, !important prevents it from taking the css style of that element
                //height: "10%",
                //width: "auto",
                height: "auto",
                //marginLeft: "45%",  
                marginLeft: "45% !important",
                //display: "inline-block",
                //verticalAlign: "bottom",
                //opacity: 64
                
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
