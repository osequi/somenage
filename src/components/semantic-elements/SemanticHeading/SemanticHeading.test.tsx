import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SemanticHeading } from ".";

it("Sets the default className", () => {
  const { container } = render(
    <SemanticHeading level={1} children="Semantic heading" />
  );
  expect(container.firstChild).toHaveClass("SemanticHeading-1");
});

it("Sets well the className", () => {
  const { container } = render(
    <SemanticHeading level={1} className="h1" children="Semantic heading" />
  );
  expect(container.firstChild).toHaveClass("h1");
});

it("Sets well the level", () => {
  const { container } = render(
    <SemanticHeading level={1} children="Semantic heading" />
  );
  expect(container.firstChild.nodeName).toBe("H1");
});

it("`Sets the default level to 3", () => {
  const { container } = render(<SemanticHeading children="Semantic heading" />);
  expect(container.firstChild.nodeName).toBe("H3");
});

it("Works when children is defined", () => {
  const { container } = render(<SemanticHeading children="Semantic heading" />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <h3
      class="SemanticHeading-3"
    >
      Semantic heading
    </h3>
  `);
});

it("Displays nothing when children is not defined", () => {
  const { container } = render(<SemanticHeading children={null} />);
  expect(container.firstChild).toBeNull();
});

it("Displays nothing with the deafult props", () => {
  const { container } = render(<SemanticHeading />);
  expect(container.firstChild).toBeNull();
});
