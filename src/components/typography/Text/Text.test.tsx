import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Text } from ".";

it("Sets well the `as`", () => {
  const { container } = render(<Text as="article">This is a text</Text>);
  expect(container.firstChild.nodeName).toBe("ARTICLE");
});

it("Sets well the `variant`", () => {
  const { container } = render(<Text variant="body">This is body a text</Text>);
  expect(container.firstChild).toHaveClass("TextBody");
});

it("Displays the default text when `variant` is not defined", () => {
  const { container } = render(<Text>This is a text</Text>);
  expect(container.firstChild).toHaveClass("TextDefault");
});

it("Displays a `div` when `as` is not defined", () => {
  const { container } = render(<Text>This is a text</Text>);
  expect(container.firstChild.nodeName).toBe("DIV");
});

it("Displays nothing when children is not defined", () => {
  const { container } = render(<Text children={null} />);
  expect(container.firstChild).toBeNull();
});

it("Displays nothing with the deafult props", () => {
  const { container } = render(<Text />);
  expect(container.firstChild).toBeNull();
});
