import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("Renders buttons to homepage", () => {
  render(<App />);
  const basicButton = screen.getByRole("button", { name: /basic/i });
  const detailButton = screen.getByRole("button", { name: /detailed/i });
  expect(basicButton).toBeInTheDocument();
  expect(detailButton).toBeInTheDocument();
});
