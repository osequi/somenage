import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from ".";

it("Renders the component", () => {
  const { container } = render(<Header />);
  expect(container.firstChild).not.toBeNull();
});
