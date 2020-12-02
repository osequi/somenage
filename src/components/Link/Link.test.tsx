import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Link } from ".";

it("Works with all mandatory params set up", () => {
  const { container } = render(
    <Link href="https://example.com" title="https://example.com" />
  );
  expect(container.firstChild.nodeName).toBe("A");
});

it("Works when 'title' is missing", () => {
  const { container } = render(<Link href="https://example.com" />);
  expect(container.firstChild.nodeName).toBe("A");
});

it("Fails back silently when no href", () => {
  const { container } = render(<Link />);
  expect(container.firstChild).toBeNull();
});
