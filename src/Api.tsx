import OpenAI from "openai";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { test } from "./interfaces/page";
import { QuizType } from "./interfaces/page";
import { ChatCompletionMessageParam } from "openai/resources";

const openai = new OpenAI({
  apiKey: "",
  dangerouslyAllowBrowser: true,
});

let message_history: ChatCompletionMessageParam[] = [];

/**
 * Requests first time career data from ChatGPT based on attributes listed in the JSON files
 * @param key The API Key for ChatGPT provided by the user
 * @param basicQ Whether you want ChatGPT to use data collected from the basic or detailed quiz
 * @returns ChatGPT's response
 */
export async function requestInitialCareer(
  key: string,
  quizType: QuizType
): Promise<string> {
  message_history = [];
  openai.apiKey = key;

  const getStorageData: string | null = localStorage.getItem(
    quizType + "-quiz-results"
  );
  if (getStorageData === null) {
    return "ERROR";
  }

  const message: string = `Based on the given set of attributes with each attribute having a max of 10 points indicating how inclined they are to that attribute,
   what career would you recommend? Please include a job description, the average salary for the position, and why you think this is best. 
   Have the first line have just the career.\n`;

  let quiz: string = message + getStorageData;

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: quiz }],
    model: "gpt-3.5-turbo",
  });

  const content = chatCompletion.choices[0].message.content;
  if (content === null) {
    return "";
  }
  message_history.push({ role: "user", content: quiz });
  message_history.push({ role: "assistant", content: content });
  return content;
}

/**
 * Requests 1 additional career for the career results page.
 * @param key The API Key provided by the User
 * @returns ChatGPT Response
 */
export async function requestAnotherCareer(key: string) {
  openai.apiKey = key;
  // Pushing new command for completion
  message_history.push({
    role: "user",
    content:
      "Give me another career with those attributes. If you cannot, give me another related career.",
  });
  const chatCompletion = await openai.chat.completions.create({
    messages: message_history,
    model: "gpt-3.5-turbo",
  });
  const content = chatCompletion.choices[0].message.content;
  if (content === null) {
    return "";
  }
  message_history.push({ role: "assistant", content: content });
  return content;
}

/**
 * A Component (Button) that requests a message from ChatGPT and posts it to the Button Text
 * @param apikey The most updated api key provided by the user
 * @returns The Component
 */
export function TestApiRequest({ apikey }: test): JSX.Element {
  const [buttonText, setButtonText] = useState<string>("Test Text");
  let newKey: string = "";
  if (apikey !== null) {
    newKey = apikey;
  }

  const response = async () => {
    if (buttonText === "Test Text") {
      setButtonText(await requestInitialCareer(newKey, "basic"));
    } else {
      setButtonText(await requestAnotherCareer(newKey));
    }
  };
  return (
    <div>
      <Button onClick={response}></Button>
      <p>{buttonText}</p>
    </div>
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
