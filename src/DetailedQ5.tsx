import { Form } from "react-bootstrap";
import { detailedQuestionProps } from "./Background";
import "./assets/css/detailed.css"

export function DetailedQ5({pageNumber: pageNum, selectedAnswers, changeAnswer, completionAmount, changeCompletionAmount}: detailedQuestionProps): JSX.Element {
  function updateAnswer(event: React.ChangeEvent<HTMLTextAreaElement>) {
    let tempArray: string[] = [...selectedAnswers];
    tempArray.splice(pageNum - 1, 1, event.target.value);
    changeAnswer(tempArray);

    //Note that because the answered questions array is a state, and state is not re-rendered until the end of the scope of the function it is changed in (in this case updateAnswer), 
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
    
    <h3>Symbiosis</h3>
    

    <div>
    As a spider there are many aspects you need to manage such as food, water, web maintenance etc. 
    However, one of the most important ones is maintaining a symbiotic relationship with other organisms. 
    How do you feel would be the best way to balance this, with the other responsibilities you would face as a spider.
    </div>


      <Form.Group controlId="formDQ5">
        <Form.Control
          as="textarea"
          rows={3}
          value={selectedAnswers[pageNum - 1]}
          onChange={updateAnswer} />
      </Form.Group>
    </div>;
  }