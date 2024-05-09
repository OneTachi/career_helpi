import { Form } from "react-bootstrap";
import { detailedQuestionProps } from "./Background";
import "./assets/css/detailed.css"

export function DetailedQ7({pageNumber: pageNum, selectedAnswers, changeAnswer, completionAmount, changeCompletionAmount}: detailedQuestionProps): JSX.Element {
  function updateAnswer(event: React.ChangeEvent<HTMLTextAreaElement>) {
    let tempArray: string[] = [...selectedAnswers];
    tempArray.splice(pageNum - 1, 1, event.target.value);
    changeAnswer(tempArray);

    //the array still has the empty string for this question if it hasn't been answered before now, and can be used to increase the progress amount.
    if(selectedAnswers[pageNum - 1] === ""){
      changeCompletionAmount(completionAmount + 1);
    }
    else if(event.target.value === ""){ //Else if the text box just became the empty string instead of changing from the empty string to any other string, the text box is empty and the question is unanswered again.
      changeCompletionAmount(completionAmount - 1);
    }
  }
  
    // This is the View
    return <div className = "Detailed-Question">
    
    <h3>Looking Forward</h3>

    <div>Looking five years from now, where would you like to be?</div>

      <Form.Group controlId="formDQ7">
        <Form.Control
          as="textarea"
          rows={3}
          value={selectedAnswers[pageNum - 1]}
          onChange={updateAnswer} />
      </Form.Group>
    </div>;
  }