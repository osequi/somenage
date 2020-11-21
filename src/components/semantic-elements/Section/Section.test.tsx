import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Section } from ".";

it("Works", () => {
  const { container } = render(<Section children="Semantic elements" />);
  expect(container.firstChild.nodeName).toBe("SECTION");
});
