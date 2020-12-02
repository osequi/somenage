import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Main } from ".";

it("Renders the component", () => {
  const { container } = render(<Main children="Semantic Element" />);
  expect(container.firstChild).not.toBeNull();
});
