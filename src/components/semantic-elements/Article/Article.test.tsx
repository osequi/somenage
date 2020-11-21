import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Article } from ".";

it("Displays the heading by default", () => {
  const { container } = render(
    <Article title="This is an article" children="Semantic elements" />
  );
  expect(container.firstChild.firstChild).toContainHTML("This is an article");
});

it("Works", () => {
  const { container } = render(<Article children="Semantic elements" />);
  expect(container.firstChild.nodeName).toBe("ARTICLE");
});
