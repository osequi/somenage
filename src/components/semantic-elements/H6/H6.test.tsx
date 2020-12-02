import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { H6 } from ".";

it("Works", () => {
  const { container } = render(<H6>Heading level1</H6>);
  expect(container.firstChild.nodeName).toBe("H6");
});

it("Fails back silently when no children", () => {
  const { container } = render(<H6 />);
  expect(container.firstChild).toBeNull();
});
