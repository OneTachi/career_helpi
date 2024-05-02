import { useState } from "react";
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { questionProps } from "./Background";
const RANKINGS= 
["Visual Appeal: 5, Functionality: 0", 
"Visual Appeal: 4, Functionality: 1", 
"Visual Appeal: 3, Functionality: 2", 
"Visual Appeal: 2, Functionality: 3", 
"Visual Appeal: 1, Functionality: 4",
"Visual Appeal: 0, Functionality: 5",
]

export function DetailedQ3({question, answers, pageNum, selectedAnswers, changeAnswer, completionAmount, changeCompletionAmount}: questionProps): JSX.Element {
    // This is the State (Model)
    const [rank, setRank] = useState<string>("_____");

    // This is the Control
    function updateRank(event: React.ChangeEvent<HTMLSelectElement>) {
        setRank(event.target.value);
    }

    // This is the View
    return (
        <div>
            <header className="DQ3Header">Detailed Question 3: Overall Design</header>

            <div>Insert Images In empty space above</div>

            <Form.Group controlId="selectRank">
                <Form.Label>
                Now you are going to determine how you are going to design your web.
                You are given 5 resource points that gain be put towards either functionality or 
                visual appeal. How you choose to distribute your resources is up to you.
                </Form.Label>
                
                <Form.Select className = "DQ3"value={rank} onChange={updateRank}>
                  { RANKINGS.map((rank: string) =>
                    <option key={rank} value={rank}>{rank}</option>
                  )}
                </Form.Select>
            
            </Form.Group>
            I would want my web to have a complexity level of rank: {rank}.
            
            <div>
            <Button className = "SubmitButton">Submit Answer</Button>
            </div>
        </div>
    );
}