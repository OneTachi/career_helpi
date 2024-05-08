import { Form } from "react-bootstrap";
import { detailedQuestionProps } from "./Background";
import "./assets/css/detailed.css"

export function DetailedQ4({pageNumber: pageNum, selectedAnswers, changeAnswer, completionAmount, changeCompletionAmount}: detailedQuestionProps): JSX.Element {
    function updateAnswer(event: React.ChangeEvent<HTMLTextAreaElement>) {
      let tempArray: string[] = [...selectedAnswers];
      tempArray.splice(pageNum - 1, 1, event.target.value);
      changeAnswer(tempArray);
    }
  
    // This is the View
    return <div className = "Detailed-Question">
    
    <h3>Preferred Employment Tasks</h3>
    

    <div>
    In your dream job, how often would you want to work on different projects and tasks? 
    Also, what would these tasks be?
    </div>


      <Form.Group controlId="formDQ4">
        <Form.Control
          as="textarea"
          rows={3}
          value={selectedAnswers[pageNum - 1]}
          onChange={updateAnswer} />
      </Form.Group>
      <div>
        Response: {selectedAnswers[pageNum - 1]}
      </div>
    </div>;
  }