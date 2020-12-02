import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Content } from ".";

it("Fails back safely with no params", () => {
  const { container } = render(<Content />);
  expect(container.firstChild).toBeNull();
});
