import { Form } from "react-bootstrap";
import { detailedQuestionProps } from "./Background";
import "./assets/css/detailed.css"
const RANKINGS= 
["Visual Appeal: 5, Functionality: 0", 
"Visual Appeal: 4, Functionality: 1", 
"Visual Appeal: 3, Functionality: 2", 
"Visual Appeal: 2, Functionality: 3", 
"Visual Appeal: 1, Functionality: 4",
"Visual Appeal: 0, Functionality: 5",
]

export function DetailedQ3({pageNumber: pageNum, selectedAnswers, changeAnswer, completionAmount, changeCompletionAmount}: detailedQuestionProps): JSX.Element {
    // This is the Control
    function updateRank(event: React.ChangeEvent<HTMLSelectElement>) {
        let tempArray: string[] = [...selectedAnswers];
        tempArray.splice(pageNum - 1, 1, event.target.value);
        changeAnswer(tempArray);
    }

    // This is the View
    return (
        <div className = "Detailed-Question">
            <h3>Web Construction</h3>

            <Form.Group controlId="selectRank">
                <div>
                Now you are going to determine how you are going to design your web.
                You are given 5 resource points that gain be put towards either functionality or 
                visual appeal. How you choose to distribute your resources is up to you.
                </div>
                
                <Form.Select className = "DQ3"value={selectedAnswers[pageNum - 1]} onChange={updateRank}>
                    {selectedAnswers[pageNum - 1] === "" && <option key={"blank"} value={""}>{"<select an option>"}</option>}
                    { RANKINGS.map((rank: string) =>
                        <option key={rank} value={rank}>{rank}</option>
                    )}
                </Form.Select>
            
            </Form.Group>
            {selectedAnswers[pageNum - 1] !== "" && <div>I would want my web to have a complexity level of rank: {selectedAnswers[pageNum - 1]}</div>}
        </div>
    );
}