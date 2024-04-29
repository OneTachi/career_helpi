import { useState } from "react";

export function VisualFeedback(): JSX.Element{
    // This is the State (Model)
    const [feedbackRecieved, setfeedbackRecieved] = useState<boolean>(false);

    // This is the Control
    function updateFeedbackRecieved(event: React.ChangeEvent<{}>) {
        //im assuming that once we have the submit questions button operational
        //that will be the event it references
        setfeedbackRecieved(true)
      }
    // This is the View
    return <div hidden={!feedbackRecieved}>
        Your Answers have been submitted To ChatGPT
        
        </div>
}