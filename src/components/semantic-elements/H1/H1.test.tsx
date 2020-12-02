import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { H1 } from ".";

it("Works", () => {
  const { container } = render(<H1>Heading level1</H1>);
  expect(container.firstChild.nodeName).toBe("H1");
});

it("Fails back silently when no children", () => {
  const { container } = render(<H1 />);
  expect(container.firstChild).toBeNull();
});
