import { useState } from "react";
import {Button} from "react-bootstrap";

export function VisualFeedback(): JSX.Element{
    // This is the State (Model)
    const [submitted, setSubmitted] = useState<boolean>(false);

    // This is the Control
    function updateSubmitted(event: React.ChangeEvent<{}>) {
        //im assuming that once we have the submit questions button operational
        //that will be the event it references
        setSubmitted(true)
      }
    // This is the View
    return <div>

      <Button onClick={updateSubmitted} hidden={submitted}>Submit Answers</Button>

    <div hidden={!submitted}>Your Answers have been submitted To ChatGPT</div>


    </div>
}