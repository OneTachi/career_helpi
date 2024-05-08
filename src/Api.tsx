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
 * Requests career data from ChatGPT based on attributes listed in the JSON files. 3 Careers in One Field.
 * @param key The API Key for ChatGPT provided by the user
 * @param quizType Whether you want ChatGPT to use data collected from the basic or detailed quiz
 * @returns Three careers within the same occupation field
 */
export async function requestCareers(
  key: string,
  quizType: QuizType
): Promise<string[]> {
  message_history = [];
  openai.apiKey = key;

  const getStorageData: string | null = localStorage.getItem(
    quizType + "-quiz-results"
  );
  if (getStorageData === null) {
    throw new Error("No quiz data available to generate careers"); // Storage data of quiz results should NEVER be null
  }

  // Create messages to ask ChatGPT
  let message: string =
    "Please give me another career with the attributes below but in a different occupation field.\n";
  // First time setup.
  if (message_history.length === 0) {
    message = `Based on the given set of attributes with each attribute having a max of 10 points indicating how inclined they are to that attribute,
   what career would you recommend? Please include a job description, the average salary for the position, and why you think this is best. 
   Have the first line have just the career. Please indicate the field.\n`;
  }

  const initial_message: string = message + getStorageData; // Combine message with data from quiz
  const following_message: string =
    "Give me another career with those attributes in the same field. If you cannot, give me another related career.";

  let careers: string[] = []; // List of careers we will return

  // Creating our responses
  careers.push(await requestCareerHelper(initial_message));
  careers.push(await requestCareerHelper(following_message));
  careers.push(await requestCareerHelper(following_message));

  return careers;
}

/**
 * Requests 1 additional career for the career results page.
 * @param message The desired messaage to send to ChatGPT
 * @returns ChatGPT Response
 */
async function requestCareerHelper(message: string) {
  // Add message to history so we can use just that variable to create response
  message_history.push({ role: "user", content: message });
  const chatCompletion = await openai.chat.completions.create({
    messages: message_history,
    model: "gpt-3.5-turbo",
  });
  const content = chatCompletion.choices[0].message.content;
  if (content === null) {
    throw new Error("Reponse from ChatGPT is empty");
  }

  // Add messages to history
  message_history.push({ role: "assistant", content: content });
  return content;
}

/**
 * A Component (Button) that requests a message from ChatGPT and posts it to the Button Text
 * @param apikey The most updated api key provided by the user
 * @returns The Component
 */
export function TestApiRequest({ apikey }: test): JSX.Element {
  const [buttonText, setButtonText] = useState<string[]>(["Test Text"]);
  let newKey: string = "";
  if (apikey !== null) {
    newKey = apikey;
  }

  const response = async () => {
    if (buttonText.length === 1) {
      setButtonText(await requestCareers(newKey, "basic"));
    } else {
      setButtonText(await requestCareers(newKey, "basic"));
    }
  };
  return (
    <div>
      <Button onClick={response}></Button>
      <p>{[...buttonText].toString()}</p>
    </div>
  );
}

export function validateUserResponse(message: string): {
  validity: boolean;
  errorMessage: string;
} {
  if (message.length <= 10) {
    return { validity: false, errorMessage: "Response too short!" };
  }
  if (message.includes("Do not") || message.includes("do not")) {
    return { validity: false, errorMessage: "Response includes commands" };
  }
  return { validity: true, errorMessage: "All good!" };
}

/**
 * Increases the attributes based on a user prompt.
 * @param message User's response to text prompt
 * @param quizType Type of quiz we want to change attributes for
 */
export async function incrementAttributesByMessage(
  message: string,
  quizType: QuizType
): Promise<void> {
  // Create Question
  const question: string =
    `Based on the attributes below and the message below, please distribute 3 points to 3 different attributes. 
  Please only include the three attributes as your response separated by commas. Do not include anything outside the attribute list.\n
  Attributes: problem solving, protectiveness, creativity, empathy, leadership, communication, 
  teamwork, patience, organization, decision making, adaptability, independence, ethics, analytics\n
  Message: ` + message;

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: question }],
    model: "gpt-3.5-turbo",
  });
  const response = chatCompletion.choices[0].message.content;
  if (response === null) {
    throw new Error(
      "Reponse from ChatGPT is empty for increment by message function"
    );
  }

  // Handle Incrementation
  handleResponseAttribution(response, quizType);
}

/**
 * Increases the attributes of a given message containing the names of the attributes it wants to increase. Comma separated message
 * @param response ChatGPT's three choices of attributes to increment. MUST be comma separated
 * @param quizType The type of quiz to alter the data for
 */
export function handleResponseAttribution(
  response: string,
  quizType: QuizType
): void {
  // Get Data
  const separated_response: string[] = response.split(",");
  const formatted_response = separated_response.map((resp: string) => {
    return resp.trim();
  });
  const getStorageData: string | null = localStorage.getItem(
    quizType + "-quiz-results"
  );
  if (getStorageData === null) {
    throw new Error("No quiz data available to generate careers"); // Storage data of quiz results should NEVER be null
  }
  // Increase attributes as long as attribute is correct.
  const quiz_data: Record<string, number> = JSON.parse(getStorageData);

  [...formatted_response].forEach((resp: string) => {
    if (resp in quiz_data) {
      quiz_data[resp] = Math.min(10, quiz_data[resp] + 1); // We want to have a max of 10 points in any attribute
    }
  });

  // Set new data in local storage
  const formatted_data = JSON.stringify(quiz_data);
  localStorage.setItem(quizType + "-quiz-results", formatted_data);
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
 * Primarily used for testing purposes.
 * @param quizType The type of quiz
 * @returns Record of quiz data
 */
export function getAttributes(quizType: QuizType): Record<string, number> {
  const getStorageData: string | null = localStorage.getItem(
    quizType + "-quiz-results"
  );
  if (getStorageData === null) {
    throw new Error("No quiz data available to generate careers"); // Storage data of quiz results should NEVER be null
  }

  const quiz_data: Record<string, number> = JSON.parse(getStorageData);
  return quiz_data;
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
