import { useState } from "react";
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import "career_helpi\src\assets\css\DetailedQ6.css"

export function DetailedQ6(): JSX.Element {
    // This is the State (Model)
    const [answer, setAnswer] = useState<string>("");
  
    // This is the Control
    function updateAnswer(event: React.ChangeEvent<HTMLTextAreaElement>) {
      setAnswer(event.target.value)
    }
  
    // This is the View
    return <div>
    
    <header className={"DQ6-Title"}>Detailed Question 6: "Friendly Displacement"</header>
    

    <Form.Text>
    
    Imagine you are a spider that somehow made it inside someone's house. T
    hankfully they just wrapped you in a paper towel and put you back outside. 
    However, you are now stranded in a completely different environment than you used to. 
    How do you feel you would react in this situation?

    </Form.Text>


      <Form.Group controlId="formDQ6">
        <Form.Control className = "DQ6-Textbox"
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