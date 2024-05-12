import { Form } from "react-bootstrap";
import { detailedQuestionProps } from "./Background";
import "./assets/css/detailed.css"

export function DetailedQ4({pageNumber: pageNum, selectedAnswers, changeAnswer, completionAmount, changeCompletionAmount}: detailedQuestionProps): JSX.Element {
  function updateAnswer(event: React.ChangeEvent<HTMLTextAreaElement>) {
    let tempArray: string[] = [...selectedAnswers];
    tempArray.splice(pageNum - 1, 1, event.target.value);
    changeAnswer(tempArray);

    //Note that because the answered questions array is a state, and state is not re-rendered until the end of the scope of the function it is changed in (in this case updateAnswer), 
    //the array still has < minNum charcaters for this question if it hasn't been answered before now, and can be used to increase the progress amount.
    const minNumCharacters: number = 10;
    if(selectedAnswers[pageNum - 1].length === minNumCharacters - 1 && event.target.value.length === minNumCharacters){
      changeCompletionAmount(completionAmount + 1);
    }
    else if(selectedAnswers[pageNum - 1].length === minNumCharacters && event.target.value.length === minNumCharacters - 1){ //Else if the text box just became less than minNum characters instead, the text box is empty and the question is unanswered again.
      changeCompletionAmount(completionAmount - 1);
    }
  }

  // This is the View
  return <div className = "Detailed-Question">
  
  <h3>Preferred Employment Tasks</h3>
  

  <div>
  In your dream job, how often would you want to work on different projects and tasks? 
  Also, what would these tasks be? {"(Type at least 10 characters)"}
  </div>


    <Form.Group controlId="formDQ4">
      <Form.Control
        as="textarea"
        rows={3}
        value={selectedAnswers[pageNum - 1]}
        onChange={updateAnswer} />
    </Form.Group>
  </div>;
}