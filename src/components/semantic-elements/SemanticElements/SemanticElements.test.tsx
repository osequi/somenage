import React from "react";
import { render } from "@testing-library/react";
import { SemanticElements } from ".";

it("Fails back when `as` is not defined", () => {
  const { container } = render(
    <SemanticElements display={true} children="Semantic elements" />
  );
  expect(container.firstChild).toBeNull(); //(`<div class="Div">Semantic elements</div>`);
});

it("Works when children is defined", () => {
  const { container } = render(
    <SemanticElements display={true} children="Semantic elements" />
  );
  expect(container.firstChild).toMatchInlineSnapshot();
});

it("Displays nothing when children is not defined", () => {
  const { container } = render(<SemanticElements display={true} />);
  expect(container.firstChild).toBeNull();
});

it("Displays nothing with the deafult props", () => {
  const { container } = render(<SemanticElements />);
  expect(container.firstChild).toBeNull();
});
