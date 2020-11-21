import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Nav } from ".";

it("Works", () => {
  const { container } = render(<Nav children="Semantic elements" />);
  expect(container.firstChild.nodeName).toBe("NAV");
});
