import { useState } from "react";
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";

/*
Imagine as a spider you are deciding where to build a new web. 
Where would it be? 
(Dropdown select menu)
*/
const LOCATIONS= ["beach", "city", "rainforest", "mountain"]

export function DetailedQ1(): JSX.Element {
    // This is the State (Model)
    const [location, setLocation] = useState<string>("_____");

    // This is the Control
    function updateLocation(event: React.ChangeEvent<HTMLSelectElement>) {
        setLocation(event.target.value);
    }

    // This is the View
    return (
        <div>
            <header className="DQ1Header">Detailed Question 1: Location</header>

            <div>Insert Images In empty space above</div>

            <Form.Group controlId="selectLocation">
                <Form.Label>
                Imagine as a spider you are deciding where to build a new web. 
                Where would it be?   
                </Form.Label>
                
                <Form.Select className = "DQ1"value={location} onChange={updateLocation}>
                  { LOCATIONS.map((location: string) =>
                    <option key={location} value={location}>{location}</option>
                  )}
                </Form.Select>
            
            </Form.Group>
            I would want to set my web up in a {location}.
            
            <div>
            <Button className = "SubmitButton">Submit Answer</Button>
            </div>
        </div>
    );
}