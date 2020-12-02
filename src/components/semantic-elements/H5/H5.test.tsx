import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { H5 } from ".";

it("Works", () => {
  const { container } = render(<H5>Heading level1</H5>);
  expect(container.firstChild.nodeName).toBe("H5");
});

it("Fails back silently when no children", () => {
  const { container } = render(<H5 />);
  expect(container.firstChild).toBeNull();
});
