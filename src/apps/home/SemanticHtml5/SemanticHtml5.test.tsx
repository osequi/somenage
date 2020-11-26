import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SemanticHtml5 } from ".";

it("Renders the component", () => {
  const { container } = render(<SemanticHtml5 />);
  expect(container.firstChild).not.toBeNull();
});
