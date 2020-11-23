import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Cell } from ".";

it("Renders the component", () => {
  const { container } = render(<Cell />);
  expect(container.firstChild).not.toBeNull();
});
