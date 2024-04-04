import React, { useState } from 'react';
import './App.css';
import { Button, Form } from 'react-bootstrap';

export function MultipleChoice(): JSX.Element{
    //Temporary values until we have real questions
    const answers = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];
    const [selectedAnswer, changeAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        changeAnswer(event.target.value);
    }
      

    return(
        <div>
            <h3>Question</h3>
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
                    {selectedAnswer}
                </Form.Check>
            ))}
        </div>
    );
}
