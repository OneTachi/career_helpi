import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import { handleResponseAttribution, getAttributes } from "../Api";

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

describe("handleResponseAttribution Tests", () => {
  test("Handles correct case", () => {
    // Purposefully does not reset quiz_format for next question
    render(<App />);
    handleResponseAttribution("ethics, teamwork, empathy", "basic");
    quiz_format["ethics"] = 1;
    quiz_format["teamwork"] = 1;
    quiz_format["empathy"] = 1;
    expect(getAttributes("basic")).toEqual(quiz_format);
  });
  test("Does not increment mispelled text", () => {
    render(<App />);
    handleResponseAttribution("ethic", "basic");
    expect(getAttributes("basic")).toEqual(quiz_format);
    quiz_format["ethics"] = 0;
    quiz_format["teamwork"] = 0;
    quiz_format["empathy"] = 0;
  });
  test("Increment by two", () => {
    render(<App />);
    handleResponseAttribution("ethics, ethics", "basic");
    quiz_format["ethics"] = 2;
    expect(getAttributes("basic")).toEqual(quiz_format);
    quiz_format["ethics"] = 0;
  });
  test("Handles empty case", () => {
    render(<App />);
    handleResponseAttribution("", "basic");
    expect(getAttributes("basic")).toEqual(quiz_format);
  });
});
