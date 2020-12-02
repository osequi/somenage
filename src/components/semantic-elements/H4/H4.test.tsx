import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { H4 } from ".";

it("Works", () => {
  const { container } = render(<H4>Heading level1</H4>);
  expect(container.firstChild.nodeName).toBe("H4");
});

it("Fails back silently when no children", () => {
  const { container } = render(<H4 />);
  expect(container.firstChild).toBeNull();
});
