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

async function requestMessage(key: string): Promise<string> {
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

export function TestApiRequest({ apikey }: test): JSX.Element {
  const [buttonText, setButtonText] = useState<string>("Next");
  let newKey: string = "";
  if (apikey !== null) {
    newKey = apikey;
  }
  // async () => setButtonText(await requestMessage(props.key))
  return (
    <Button onClick={async () => setButtonText(await requestMessage(newKey))}>
      {buttonText}
    </Button>
  );
}
