import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { A11y } from ".";

it("Renders the component", () => {
  const { container } = render(<A11y />);
  expect(container.firstChild).not.toBeNull();
});
