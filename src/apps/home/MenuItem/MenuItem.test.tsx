import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MenuItem } from ".";

it("Fails back safely when no params", () => {
  const { container } = render(<MenuItem />);
  expect(container.firstChild).toBeNull();
});
