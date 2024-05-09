import { Form } from "react-bootstrap";
import { detailedQuestionProps } from "./Background";

import "./assets/css/detailed.css"

/*
Imagine as a spider you are deciding where to build a new web. 
Where would it be? 
(Dropdown select menu)
*/
const LOCATIONS= ["beach", "city", "rainforest", "mountain"]

export function DetailedQ1({pageNumber: pageNum, selectedAnswers, changeAnswer, completionAmount, changeCompletionAmount}: detailedQuestionProps): JSX.Element {
// This is the Control
    function updateLocation(event: React.ChangeEvent<HTMLSelectElement>) {
        let tempArray: string[] = [...selectedAnswers];
        tempArray.splice(pageNum - 1, 1, event.target.value);
        changeAnswer(tempArray);

        //Note that because the answered questions array is a state, and state is not re-rendered until the end of the scope of the function it is changed in (in this case updateAnswer), 
        //the array still has the empty string for this question if it hasn't been answered before now, and can be used to increase the progress amount.
        if(selectedAnswers[pageNum - 1] === ""){
            changeCompletionAmount(completionAmount + 1);
        }
    }

    // This is the View
    return (
        <div className = "Detailed-Question">
            <h3>Location</h3>

            <div>Insert Images In empty space above</div>

            <Form.Group controlId="selectLocation">
                <Form.Text>
                Imagine as a spider you are deciding where to build a new web. 
                Where would it be?   
                </Form.Text>
                
                <Form.Select value={selectedAnswers[pageNum - 1]} onChange={updateLocation}>
                    {selectedAnswers[pageNum - 1] === "" && <option key={"blank"} value={""}>{"<select an option>"}</option>}
                    { LOCATIONS.map((location: string) =>
                        <option key={location} value={location}>{location}</option>
                    )}
                </Form.Select>
            
            </Form.Group>

            {selectedAnswers[pageNum - 1] !== "" && <div>I would want to set my web up in a {selectedAnswers[pageNum - 1]}.</div>}
        </div>
    );
}