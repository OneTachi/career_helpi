import { useState } from "react";
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { questionProps } from "./Background";
export function DetailedQ2({question, answers, pageNum, selectedAnswers, changeAnswer, completionAmount, changeCompletionAmount}: questionProps): JSX.Element {
    // This is the State (Model)
      const [qualities, setQualities] = useState<string[]>([]);
  
      // This is the Control
      function updateQualities(event: React.ChangeEvent<HTMLInputElement>) {
          const quality = event.target.value;
          // Check if the emotion is already present
          if (qualities.includes(quality)) {
              //If its already in the array, meaning it is checked, it will be removed, 
              //since after the click it will be unchecked
              setQualities(qualities.filter((qual) => qual !== quality));
          } else {
              //If its not in the array, meaning it is unchecked, it will be added, 
              //since after the click it will be checked
              setQualities([...qualities, quality]);
          }
      }
  
      // This is the View
      return (
          <div>
              
              <header className="DQ2-Header">Detailed Question 2: Select Your Silks</header>

                <div className="DQ2">
              <div>Now you must choose the silk you will use to create your web out of.</div>
              <div>Of the options provided, check the three qualities that appeal to you the most.</div>
              </div>

              <div className="DQ2-CheckBox">
              <Form.Check
                  type="checkbox"
                  id="quality-check-strength"
                  label="Strength" //what shows up next to the checkbox
                  name="qualities"
                  value="strength" //what shows up when the checkbox is selected
                  checked={qualities.includes("strength")}
                  onChange={updateQualities}
              />
              <Form.Check
                  type="checkbox"
                  id="quality-check-durability"
                  label="Durability"
                  name="qualities"
                  value="durability"
                  checked={qualities.includes("durability")}
                  onChange={updateQualities}
              />
              <Form.Check
                  type="checkbox"
                  id="quality-check-repairability"
                  label="Repairability"
                  name="qualities"
                  value="repairability"
                  checked={qualities.includes("repairability")}
                  onChange={updateQualities}
              />
              <Form.Check
                  type="checkbox"
                  id="quality-check-preyCaptureAbility"
                  label="Prey Capture Ability"
                  name="qualities"
                  value="prey capture ability"
                  checked={qualities.includes("prey capture ability")}
                  onChange={updateQualities}
              />
              <Form.Check
                  type="checkbox"
                  id="quality-check-flexibility"
                  label="Flexibility"//uppercase
                  name="qualities"
                  value="flexibility"
                  checked={qualities.includes("flexibility")}
                  onChange={updateQualities}
              />
              <Form.Check
                  type="checkbox"
                  id="quality-check-biodegradability"
                  label="Biodegradability"//uppercase
                  name="qualities"
                  value="biodegradability"
                  checked={qualities.includes("biodegradability")}
                  onChange={updateQualities}
              />
              <Form.Check
                  type="checkbox"
                  id="quality-check-camouflage"
                  label="Camouflage"//uppercase
                  name="qualities"
                  value="camouflage"
                  checked={qualities.includes("camouflage")}
                  onChange={updateQualities}
              />
              <Form.Check
                  type="checkbox"
                  id="quality-check-stickiness"
                  label="Stickiness"//uppercase
                  name="qualities"
                  value="stickiness"
                  checked={qualities.includes("stickiness")}
                  onChange={updateQualities}
              />
              </div>
              
              <div>Qualities Selected So Far: {qualities.length}</div>
              
              <div>
                The top 3 most important web qualities to me are: {qualities.join(" and ")}.
              </div>
              <Button disabled = {qualities.length > 3}>Submit</Button>
          </div>
      );
  }
  