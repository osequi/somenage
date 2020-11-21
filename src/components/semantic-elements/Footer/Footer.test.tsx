import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Footer } from ".";

it("Works", () => {
  const { container } = render(<Footer children="Semantic elements" />);
  expect(container.firstChild.nodeName).toBe("FOOTER");
});
