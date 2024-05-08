import { useState } from "react";
import { Form } from "react-bootstrap";
import { detailedQuestionProps } from "./Background";
import "./assets/css/detailed.css"

export function DetailedQ2({pageNumber: pageNum, selectedAnswers, changeAnswer, completionAmount, changeCompletionAmount}: detailedQuestionProps): JSX.Element {
    const [numSelected, changeNumSelected] = useState<number>(0);

    // This is the Control
      function updateQualities(event: React.ChangeEvent<HTMLInputElement>) {
            const quality = event.target.value;
            let qualities: string[] = selectedAnswers[pageNum - 1].split(",");
            // Check if the emotion is already present
            if (qualities.includes(quality)) {
                //If its already in the array, meaning it is checked, it will be removed, 
                //since after the click it will be unchecked
                
                let tempArray: string[] = [...selectedAnswers];
                tempArray.splice(pageNum - 1, 1, qualities.filter((qual) => qual !== quality).toString());
                changeAnswer(tempArray);
                updateNumSelected(-1);
            } else if(numSelected < 3){
                //If its not in the array, meaning it is unchecked, it will be added, 
                //since after the click it will be checked

                let tempArray: string[] = [...selectedAnswers];
                if(qualities.length === 1 && qualities[0] === ""){
                    qualities = [quality];
                    tempArray.splice(pageNum - 1, 1, [...qualities].toString());
                }
                else{
                    tempArray.splice(pageNum - 1, 1, [...qualities, quality].toString());
                }

                changeAnswer(tempArray);
                updateNumSelected(1);
            }
      }

      function updateNumSelected(amount: number){
        changeNumSelected(numSelected + amount);
      }

      function getPrintString(): string{
        let qualities: string[] = selectedAnswers[pageNum - 1].split(",");
        let prnt: string = "The top 3 most important web qualities to me are: ";

        if(qualities.length <= 2){
            prnt += qualities.join(" and ").toString();
        }
        else{
            prnt += qualities.join(", ").toString();
            prnt = prnt.substring(0, prnt.lastIndexOf(",") + 1) + " and " + prnt.substring(prnt.lastIndexOf(",") + 1)
        }

        return(prnt);
      }
  
      // This is the View
      return (
          <div className = "Detailed-Question">
              
              <h3 className="DQ2-Header">Select Your Silks</h3>

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
                  checked={selectedAnswers[pageNum - 1].split(",").includes("strength")}
                  onChange={updateQualities}
              />
              <Form.Check
                  type="checkbox"
                  id="quality-check-durability"
                  label="Durability"
                  name="qualities"
                  value="durability"
                  checked={selectedAnswers[pageNum - 1].split(",").includes("durability")}
                  onChange={updateQualities}
              />
              <Form.Check
                  type="checkbox"
                  id="quality-check-repairability"
                  label="Repairability"
                  name="qualities"
                  value="repairability"
                  checked={selectedAnswers[pageNum - 1].split(",").includes("repairability")}
                  onChange={updateQualities}
              />
              <Form.Check
                  type="checkbox"
                  id="quality-check-preyCaptureAbility"
                  label="Prey Capture Ability"
                  name="qualities"
                  value="prey capture ability"
                  checked={selectedAnswers[pageNum - 1].split(",").includes("prey capture ability")}
                  onChange={updateQualities}
              />
              <Form.Check
                  type="checkbox"
                  id="quality-check-flexibility"
                  label="Flexibility"//uppercase
                  name="qualities"
                  value="flexibility"
                  checked={selectedAnswers[pageNum - 1].split(",").includes("flexibility")}
                  onChange={updateQualities}
              />
              <Form.Check
                  type="checkbox"
                  id="quality-check-biodegradability"
                  label="Biodegradability"//uppercase
                  name="qualities"
                  value="biodegradability"
                  checked={selectedAnswers[pageNum - 1].split(",").includes("biodegradability")}
                  onChange={updateQualities}
              />
              <Form.Check
                  type="checkbox"
                  id="quality-check-camouflage"
                  label="Camouflage"//uppercase
                  name="qualities"
                  value="camouflage"
                  checked={selectedAnswers[pageNum - 1].split(",").includes("camouflage")}
                  onChange={updateQualities}
              />
              <Form.Check
                  type="checkbox"
                  id="quality-check-stickiness"
                  label="Stickiness"//uppercase
                  name="qualities"
                  value="stickiness"
                  checked={selectedAnswers[pageNum - 1].split(",").includes("stickiness")}
                  onChange={updateQualities}
              />
              </div>
                            
              <div>
                The top 3 most important web qualities to me are: {getPrintString()}
              </div>
          </div>
      );
  }
  