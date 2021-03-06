import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SemanticElement } from ".";

it("Displays a custom heading", () => {
  const { container } = render(
    <SemanticElement
      heading={{ level: 1, children: "XXX" }}
      children="Semantic elements"
    />
  );
  expect(container.firstChild.firstChild.nodeName).toBe("H1");
});

it("`className` fails back silently", () => {
  const { container } = render(
    <SemanticElement children="Semantic elements" />
  );
  expect(container.firstChild).toHaveClass("ClassName");
});

it("`className` is generated when it's not directly specified", () => {
  const { container } = render(
    <SemanticElement
      title="Class name generated"
      children="Semantic elements"
    />
  );
  expect(container.firstChild).toHaveClass("DivClassNameGenerated");
});

it("`className` is working well", () => {
  const { container } = render(
    <SemanticElement className="className" children="Semantic elements" />
  );
  expect(container.firstChild).toHaveClass("className");
});

it("`title` fails back to `className` silently", () => {
  const { container } = render(
    <SemanticElement
      displayTitle={true}
      className="className"
      children="Semantic elements"
    />
  );
  expect(container.firstChild.firstChild).toHaveTextContent("className");
});

it("`title` is working well", () => {
  const { container } = render(
    <SemanticElement
      displayTitle={true}
      title="Heading title"
      children="Semantic elements"
    />
  );
  expect(container.firstChild.firstChild).toHaveTextContent("Heading title");
});

it("Displays the title on request", () => {
  const { container } = render(
    <SemanticElement displayTitle={true} children="Semantic elements" />
  );
  expect(container.firstChild.firstChild).toHaveStyle("display:block");
});

it("Hides the title by default", () => {
  const { container } = render(
    <SemanticElement children="Semantic elements" />
  );
  expect(container.firstChild.firstChild).toHaveStyle("display:none");
});

it("Displays a H2 heading for title", () => {
  const { container } = render(
    <SemanticElement children="Semantic elements" />
  );
  expect(container.firstChild.firstChild.nodeName).toBe("H2");
});

it("`as` is working well", () => {
  const { container } = render(
    <SemanticElement as="section" children="Semantic elements" />
  );
  expect(container.firstChild.nodeName).toBe("SECTION");
});

it("`as` fails back to `div` when it is not defined", () => {
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
      class="ClassName"
    >
      <h2
        class="SemanticHeading-2"
        style="display: none;"
      >
        ClassName
      </h2>
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
