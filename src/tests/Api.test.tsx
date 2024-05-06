import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { handleResponseAttribution } from "../Api";

describe("handleResponseAttribution Tests", () => {
  test("Handles correct case", () => {
    render(<App />);
    handleResponseAttribution("ethics, teamwork, empathy", "basic");
  });
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
