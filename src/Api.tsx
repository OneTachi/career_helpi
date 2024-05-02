import OpenAI from "openai";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { test } from "./interfaces/page";
import { QuizType } from "./interfaces/page";

/**
 * Requests career data from ChatGPT based on attributes listed in the JSON files
 * @param key The API Key for ChatGPT provided by the user
 * @param basicQ Whether you want ChatGPT to use data collected from the basic or detailed quiz
 * @returns ChatGPT's response
 */
export async function requestCareer(
  key: string,
  quizType: QuizType
): Promise<string> {
  const openai = new OpenAI({
    apiKey: key,
    dangerouslyAllowBrowser: true,
  });

  const getStorageData: string | null = localStorage.getItem(
    quizType + "-quiz-results"
  );
  if (getStorageData === null) {
    return "ERROR";
  }
  const quiz: Record<string, number> = JSON.parse(getStorageData);

  const message: string = `Based on the given set of attributes with each attribute having a max of 10 points indicating how inclined they are to that attribute,
   what career would you recommend? Please include a job description, the average salary for the position, and why you think this is best. 
   Have the first line have just the career.\n`;

  let storageData: string = message + getStorageData;

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: storageData }],
    model: "gpt-3.5-turbo",
  });

  if (chatCompletion.choices[0].message.content === null) {
    return "";
  }
  return chatCompletion.choices[0].message.content;
}

/**
 * A Component (Button) that requests a message from ChatGPT and posts it to the Button Text
 * @param apikey The most updated api key provided by the user
 * @returns The Component
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
      onClick={async () => setButtonText(await requestCareer(newKey, "basic"))}
    >
      {buttonText}
    </Button>
  );
}
/**
 * Increases elements of quiz result data
 * @param attr A list of attributes to increment. MUST equal the length of points parameter.
 * @param points The number of points to increment the attributes. It's order must reflect the order of attr paramater.
 * @param quizType Whether to alter the basic question results or detailed question results
 */
export function incrementAttributes(
  attr: string[],
  points: number[],
  quizType: QuizType
): void {
  if (attr.length !== points.length) {
    throw new Error("Attribute list does not match point list");
  }
  // Get data from Local Storage
  let quizKey = localStorage.getItem(quizType + "-quiz-results");
  let quiz: Record<string, number>;
  if (quizKey === null) {
    return;
  }
  quiz = JSON.parse(quizKey);

  [...attr].map((att: string) => (quiz[att] += points[attr.indexOf(att)]));
  localStorage.setItem(quizType + "-quiz-results", JSON.stringify(quiz));
}
/**
 * Creates attributes to track in local storage
 */
export function initializeAttributes(): void {
  const quiz_format: Record<string, number> = {
    "problem solving": 0,
    protectiveness: 0,
    creativity: 0,
    empathy: 0,
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

  localStorage.getItem("basic-quiz-results");
  localStorage.getItem("detailed-quiz-results");
  localStorage.setItem("basic-quiz-results", JSON.stringify(quiz_format));
  localStorage.setItem("detailed-quiz-results", JSON.stringify(quiz_format));
}
