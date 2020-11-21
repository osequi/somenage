import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TypographyGridLines } from ".";

it("Renders exactly the number of lines specified", () => {
  const { getAllByTestId } = render(
    <TypographyGridLines displayHorizontalRhytm={true} numberOfHorizontalLines={3} />
  );
  expect(getAllByTestId("GridLine-horizontal").length).toBe(3);
});

it("Renders horizontal lines", () => {
  const { getByTestId } = render(
    <TypographyGridLines displayHorizontalRhytm={true} numberOfHorizontalLines={1} />
  );
  expect(getByTestId("GridLine-horizontal")).toBeDefined();
});

it("Renders vertical lines", () => {
  const { getByTestId } = render(
    <TypographyGridLines displayVerticalRhytm={true} numberOfVerticalLines={1} />
  );
  expect(getByTestId("GridLine-vertical")).toBeDefined();
});
