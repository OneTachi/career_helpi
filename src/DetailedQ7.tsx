import { Form } from "react-bootstrap";
import { detailedQuestionProps } from "./Background";
import "./assets/css/detailed.css"

export function DetailedQ7({pageNumber: pageNum, selectedAnswers, changeAnswer, completionAmount, changeCompletionAmount}: detailedQuestionProps): JSX.Element {
  function updateAnswer(event: React.ChangeEvent<HTMLTextAreaElement>) {
    let tempArray: string[] = [...selectedAnswers];
    tempArray.splice(pageNum - 1, 1, event.target.value);
    changeAnswer(tempArray);
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