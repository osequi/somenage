import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MenuItem } from ".";

it("Renders the component", () => {
  const { container } = render(<MenuItem />);
  expect(container.firstChild).not.toBeNull();
});
