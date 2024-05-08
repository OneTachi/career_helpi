import { Form } from "react-bootstrap";
import { detailedQuestionProps } from "./Background";
import "./assets/css/detailed.css"

export function DetailedQ6({pageNumber: pageNum, selectedAnswers, changeAnswer, completionAmount, changeCompletionAmount}: detailedQuestionProps): JSX.Element {
  function updateAnswer(event: React.ChangeEvent<HTMLTextAreaElement>) {
    let tempArray: string[] = [...selectedAnswers];
    tempArray.splice(pageNum - 1, 1, event.target.value);
    changeAnswer(tempArray);
  }
  
    // This is the View
    return <div className = "Detailed-Question">
    
    <h3>"Friendly Displacement"</h3>
    

    <div>
    Imagine you are a spider that somehow made it inside someone's house. T
    hankfully they just wrapped you in a paper towel and put you back outside. 
    However, you are now stranded in a completely different environment than you used to. 
    How do you feel you would react in this situation?
    </div>


      <Form.Group controlId="formDQ6">
        <Form.Control
          as="textarea"
          rows={3}
          value={selectedAnswers[pageNum - 1]}
          onChange={updateAnswer} />
      </Form.Group>
    </div>;
  }