import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { H2 } from ".";

it("Works", () => {
  const { container } = render(<H2>Heading level1</H2>);
  expect(container.firstChild.nodeName).toBe("H2");
});

it("Fails back silently when no children", () => {
  const { container } = render(<H2 />);
  expect(container.firstChild).toBeNull();
});
