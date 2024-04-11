import { useState } from "react";
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";

export function DetailedQ3(): JSX.Element {
    const [response, setResponse] = useState<string>("good");
    return (
        <div>
            <Form.Check
                type="radio"
                name="response"
                onChange={(e) => setResponse(e.target.value)}
                id="response-good"
                label="😃"
                value="good"
                checked={response === "good"}
            />
            <Form.Check
                type="radio"
                name="response"
                onChange={(e) => setResponse(e.target.value)}
                id="response-bad"
                label="😒"
                value="bad"
                checked={response === "bad"}
            />
            <div>The response is {response === "good" ? "😃" : "😒"}.</div>
        </div>
    );
}