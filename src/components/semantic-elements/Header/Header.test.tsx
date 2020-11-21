import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from ".";

it("Works", () => {
  const { container } = render(<Header children="Semantic elements" />);
  expect(container.firstChild.nodeName).toBe("HEADER");
});
