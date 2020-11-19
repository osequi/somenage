import React from "react";
import { render } from "@testing-library/react";
import { Setup } from ".";

it("Works", () => {
  const { container } = render(<Setup />);
  expect(container).toBe(2);
});
