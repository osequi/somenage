import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { H3 } from ".";

it("Works", () => {
  const { container } = render(<H3>Heading level1</H3>);
  expect(container.firstChild.nodeName).toBe("H3");
});

it("Fails back silently when no children", () => {
  const { container } = render(<H3 />);
  expect(container.firstChild).toBeNull();
});
