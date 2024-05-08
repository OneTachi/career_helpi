import { useState } from "react";
import { Form } from "react-bootstrap";
import { detailedQuestionProps } from "./Background";
import "./assets/css/detailed.css"

export function DetailedQ2({pageNumber: pageNum, selectedAnswers, changeAnswer, completionAmount, changeCompletionAmount}: detailedQuestionProps): JSX.Element {
    const [numSelected, changeNumSelected] = useState<number>(selectedAnswers[pageNum - 1].split(",").length * Number(selectedAnswers[pageNum - 1] !== ""));
    //Initial value of the state for number of selected options is the length of the stringified array of options in selectedAnswers at the index for this question.
    //This is multiplied by the binary value of whether selectedAnswers contains "" there (its initial value before anything is picked), because if so then the stringified array length is technically 1 due to "" being an element of the array, and it would be counted towards the number of options selected already even though "" is not an option. So the total will be multiplied by 0 and become 0 if "" is the value in the stringified array and nothing is picked yet.

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
                
                //State doesn't update until the end of function scope, so if the number of selected options is 3 and this part of the if statement is reached, the number selected will become 2. But the state has not yet updated so it will still be stored as 3 in the state until the function ends, so if we are here and the state equals 3, not enough answers have been selected and the question is incomplete.
                if(numSelected === 3){
                    changeCompletionAmount(completionAmount - 1);
                }
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

                //State doesn't update until the end of function scope, so if the number of selected options is 2 and this part of the if statement is reached, the number selected will become 3. So, this question is completed since 3 boxes have been checked and you need to choose 3 options.
                updateNumSelected(1);
                if(numSelected === 2){
                    changeCompletionAmount(completionAmount + 1);
                }
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
            prnt = prnt.substring(0, prnt.lastIndexOf(",") + 1) + " and " + prnt.substring(prnt.lastIndexOf(",") + 1);
        }
        return(prnt);
      }
  
      // This is the View
      return (
          <div className = "Detailed-Question">
              
              <h3>Select Your Silks</h3>

                <div>
              <div>Now you must choose the silk you will use to create your web out of.</div>
              <div>Of the options provided, check the three qualities that appeal to you the most.</div>
              </div>

              <div>
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
                            
              {selectedAnswers[pageNum - 1] !== "" && <div>{getPrintString()}.</div>}
          </div>
      );
  }
  