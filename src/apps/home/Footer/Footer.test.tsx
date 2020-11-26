import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Footer } from ".";

it("Renders the component", () => {
  const { container } = render(<Footer />);
  expect(container.firstChild).not.toBeNull();
});
