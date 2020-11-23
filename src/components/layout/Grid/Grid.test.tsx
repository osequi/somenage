import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Grid } from ".";

it("Renders the component", () => {
  const { container } = render(<Grid />);
  expect(container.firstChild).not.toBeNull();
});
