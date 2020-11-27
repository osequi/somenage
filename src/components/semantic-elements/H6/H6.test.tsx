import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { H6 } from ".";

it("Renders the component", () => {
  const { container } = render(<H6 />);
  expect(container.firstChild).not.toBeNull();
});
