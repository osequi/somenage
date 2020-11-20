import React from "react";
import { render } from "@testing-library/react";
import { Headings } from ".";

it("Works with the heading level set", () => {
  const { container } = render(
    <Headings level={1} display={true} children="Hello" />
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <h1>
      Hello
    </h1>
  `);
});

it("Works when children is defined", () => {
  const { container } = render(
    <Headings level={3} display={true} children="Hello" />
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <h3>
      Hello
    </h3>
  `);
});

it("Displays nothing when children is not defined", () => {
  const { container } = render(<Headings level={3} display={true} />);
  expect(container.firstChild).toBeNull();
});

it("Displays nothing with the deafult props", () => {
  const { container } = render(<Headings />);
  expect(container.firstChild).toBeNull();
});
