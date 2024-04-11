import { useState } from "react";
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";

export function DetailedQ4(): JSX.Element {
    // This is the State (Model)
    const [description, setDescription] = useState<string>('What can you tell me?');
  
    // This is the Control
    function updateDescription(event: React.ChangeEvent<HTMLTextAreaElement>) {
      setDescription(event.target.value)
    }
  
    // This is the View
    return <div>
      <Form.Group controlId="formMovieName">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={updateDescription} />
      </Form.Group>
      <div>
        Your description is {description.length} characters.
      </div>
    </div>;
  }