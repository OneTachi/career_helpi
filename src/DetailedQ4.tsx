import { useState } from "react";
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { detailedQuestionProps } from "./Background";

export function DetailedQ4({pageNumber: pageNum, selectedAnswers, changeAnswer, completionAmount, changeCompletionAmount}: detailedQuestionProps): JSX.Element {
    // This is the State (Model)
    const [answer, setAnswer] = useState<string>("");
  
    // This is the Control
    function updateAnswer(event: React.ChangeEvent<HTMLTextAreaElement>) {
      setAnswer(event.target.value)
    }
  
    // This is the View
    return <div>
    
    <header className={"DQ4-Title"}>Detailed Question 4: Preferred Employment Tasks</header>
    

    <Form.Text>
    
    In your dream job, how often would you want to work on different projects and tasks? 
    Also, what would these tasks be?

    </Form.Text>


      <Form.Group controlId="formDQ4">
        <Form.Control className = "DQ4-Textbox"
          as="textarea"
          rows={3}
          value={answer}
          onChange={updateAnswer} />
      </Form.Group>
      <div>
        Response: {answer}
      </div>
    </div>;
  }