import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SemanticElement } from ".";

it("The H3 heading can be displayed", () => {
  const { container } = render(
    <SemanticElement heading={true} children="Semantic elements" />
  );
  expect(container.firstChild.firstChild).toHaveStyle("display:block");
});

it("The H3 heading is hidden by default", () => {
  const { container } = render(
    <SemanticElement children="Semantic elements" />
  );
  expect(container.firstChild.firstChild).toHaveStyle("display:none");
});

it("A H3 heading is always inserted", () => {
  const { container } = render(
    <SemanticElement children="Semantic elements" />
  );
  expect(container.firstChild.firstChild.nodeName).toBe("H3");
});

it("`as` is working well", () => {
  const { container } = render(
    <SemanticElement as="section" children="Semantic elements" />
  );
  expect(container.firstChild.nodeName).toBe("SECTION");
});

it("Fails back to `div` when `as` is not defined", () => {
  const { container } = render(
    <SemanticElement children="Semantic elements" />
  );
  expect(container.firstChild.nodeName).toBe("DIV");
});

it("Works when children is defined", () => {
  const { container } = render(
    <SemanticElement children="Semantic elements" />
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="Div"
      data-testid="Div"
    >
      <h3
        style="display: none;"
      >
        Div
      </h3>
      Semantic elements
    </div>
  `);
});

it("Displays nothing when children is not defined", () => {
  const { container } = render(<SemanticElement children={null} />);
  expect(container.firstChild).toBeNull();
});

it("Displays nothing with the deafult props", () => {
  const { container } = render(<SemanticElement />);
  expect(container.firstChild).toBeNull();
});
