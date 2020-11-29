import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TypographicGrid } from ".";

it("Renders the component", () => {
  const { container } = render(<TypographicGrid />);
  expect(container.firstChild).not.toBeNull();
});
