import { useState } from "react";
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { detailedQuestionProps } from "./Background";

export function DetailedQ7({pageNumber: pageNum, selectedAnswers, changeAnswer, completionAmount, changeCompletionAmount}: detailedQuestionProps): JSX.Element {
    // This is the State (Model)
    const [answer, setAnswer] = useState<string>("");
  
    // This is the Control
    function updateAnswer(event: React.ChangeEvent<HTMLTextAreaElement>) {
      setAnswer(event.target.value)
    }
  
    // This is the View
    return <div>
    
    <header className={"DQ7-Title"}>Detailed Question 7: Looking Forward</header>
    

    <Form.Text>
    
    Looking five years from now, where would you like to be?

    </Form.Text>


      <Form.Group controlId="formDQ7">
        <Form.Control className = "DQ7-Textbox"
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