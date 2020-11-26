import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Link } from ".";

it("Renders the component", () => {
  const { container } = render(<Link />);
  expect(container.firstChild).not.toBeNull();
});
