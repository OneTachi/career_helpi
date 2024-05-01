import OpenAI from "openai";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { test } from "./interfaces/page";

let attribute: Record<string, number> = {
  "problem solving": 0,
  protectiveness: 0,
  creativity: 0,
  empthay: 0,
  leadership: 0,
  communication: 0,
  teamwork: 0,
  patience: 0,
  organization: 0,
  "decision making": 0,
  adaptability: 0,
  independence: 0,
  ethics: 0,
  analytics: 0,
};

/**
 * Requests career data from ChatGPT based on attributes listed in the JSON files
 * @param key The API Key for ChatGPT provided by the user
 * @param basicQ Whether you want ChatGPT to use data collected from the basic or detailed quiz
 * @returns
 */
async function requestCareer(key: string, basicQ: boolean): Promise<string> {
  const openai = new OpenAI({
    apiKey: key,
    dangerouslyAllowBrowser: true,
  });

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-3.5-turbo",
  });

  if (chatCompletion.choices[0].message.content === null) {
    return "";
  }
  return chatCompletion.choices[0].message.content;
}

export function addPoints(attr: string[], points: number[]): void {
  if (attr.length !== points.length) {
    throw new Error("Attribute list does not match point list");
  }
  [...attr].map((att: string) => (attribute[att] += points[attr.indexOf(att)]));
}

export function getPoints(attr: string): number {
  return attribute[attr];
}

/**
 * A Component (Button) that requests a message from ChatGPT and posts it to the Button Text
 * @param apikey The most updated api key provided by the user
 * @returns
 */
export function TestApiRequest({ apikey }: test): JSX.Element {
  const [buttonText, setButtonText] = useState<string>("Next");
  let newKey: string = "";
  if (apikey !== null) {
    newKey = apikey;
  }
  // async () => setButtonText(await requestMessage(props.key))
  return (
    <Button
      onClick={async () => setButtonText(await requestCareer(newKey, true))}
    >
      {buttonText}
    </Button>
  );
}
