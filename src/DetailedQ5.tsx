import { useState } from "react";
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";

export function DetailedQ5(): JSX.Element {
    // This is the State (Model)
    const [answer, setAnswer] = useState<string>("");
  
    // This is the Control
    function updateAnswer(event: React.ChangeEvent<HTMLTextAreaElement>) {
      setAnswer(event.target.value)
    }
  
    // This is the View
    return <div>
    
    <header className={"DQ5-Title"}>Detailed Question 5: Symbiosis</header>
    

    <Form.Text>
    
    As a spider there are many aspects you need to manage such as food, water, web maintenance etc. 
    However, one of the most important ones is maintaining a symbiotic relationship with other organisms. 
    How do you feel would be the best way to balance this, with the other responsibilities you would face as a spider.

    </Form.Text>


      <Form.Group controlId="formDQ5">
        <Form.Control className = "DQ5-Textbox"
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