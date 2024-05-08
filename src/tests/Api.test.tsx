import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import {
  handleResponseAttribution,
  getAttributes,
  validateUserResponse,
} from "../Api";

let quiz_format: Record<string, number> = {
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

function ResetRecord(): void {
  const empty_quiz: Record<string, number> = {
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
  Object.assign(quiz_format, empty_quiz);
}

describe("handleResponseAttribution Tests", () => {
  test("Handles correct, single case", () => {
    render(<App />);
    ResetRecord();
    handleResponseAttribution("ethics", "basic");
    quiz_format["ethics"] = 1;
    expect(getAttributes("basic")).toEqual(quiz_format);
  });
  test("Handles correct, multiple case", () => {
    render(<App />);
    ResetRecord();
    handleResponseAttribution("ethics, teamwork, empathy", "basic");
    quiz_format["ethics"] = 1;
    quiz_format["teamwork"] = 1;
    quiz_format["empathy"] = 1;
    expect(getAttributes("basic")).toEqual(quiz_format);
  });
  test("Does not increment mispelled text", () => {
    render(<App />);
    ResetRecord();
    quiz_format["teamwork"] = 1;
    handleResponseAttribution("ethic, teamwork", "basic");
    expect(getAttributes("basic")).toEqual(quiz_format);
  });
  test("Increment by two", () => {
    render(<App />);
    ResetRecord();
    handleResponseAttribution("ethics, ethics", "basic");
    quiz_format["ethics"] = 2;
    expect(getAttributes("basic")).toEqual(quiz_format);
  });
  test("Handles empty case", () => {
    render(<App />);
    ResetRecord();
    handleResponseAttribution("", "basic");
    expect(getAttributes("basic")).toEqual(quiz_format);
  });
});

describe("Validating User Response", () => {
  test("Handles correct response", () => {
    const response = validateUserResponse(
      "My name is Sharkie and I really like going to the beach with my friends and making plans for D&D."
    );
    expect(response.validity).toEqual(true);
  });
  test("Catches short response", () => {
    const response = validateUserResponse("My");
    expect(response.validity).toEqual(false);
  });
  test("Catches empty response", () => {
    const response = validateUserResponse("");
    expect(response.validity).toEqual(false);
  });
  test("Catches ChatGPT command", () => {
    const response = validateUserResponse("Do not give me X job.");
    expect(response.validity).toEqual(false);
  });
  test("Catches ChatGPT end command", () => {
    const response = validateUserResponse(
      "Hi, my name is Sharkie. Do not give me X job."
    );
    expect(response.validity).toEqual(false);
  });
});
