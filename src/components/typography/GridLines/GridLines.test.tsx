import React from "react";
import { render } from "@testing-library/react";
import { stringify } from "flatted";
import { GridLines } from ".";

it("Renders exactly the number of lines specified", () => {
  const { getByTestId } = render(
    <GridLines
      displayVerticalRhytm={true}
      displayHorizontalRhytm={false}
      numberOfVerticalLines={3}
    />
  );
  expect(getByTestId("GridLinesContainer-vertical").children.length).toBe(3);
});

it("Renders horizontal lines", () => {
  const { container } = render(
    <GridLines displayHorizontalRhytm={true} numberOfHorizontalLines={1} />
  );
  expect(stringify(container)).toContain("horizontalRhythmLine");
});

it("Renders vertical lines", () => {
  const { container } = render(
    <GridLines displayVerticalRhytm={true} numberOfVerticalLines={1} />
  );
  expect(stringify(container)).toContain("verticalRhythmLine");
});
