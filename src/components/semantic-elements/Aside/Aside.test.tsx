import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Aside } from ".";

it("Works", () => {
  const { container } = render(<Aside children="Semantic elements" />);
  expect(container.firstChild.nodeName).toBe("ASIDE");
});
