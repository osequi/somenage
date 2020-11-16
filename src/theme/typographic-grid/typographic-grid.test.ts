import { typographicGrid } from ".";

it("Line height is defined.", () => {
  expect(typographicGrid.lineHeight).not.toBeNull();
});

it("The fontSizes array has at least one element.", () => {
  expect(typographicGrid.fontSizes.length).toBeGreaterThan(1);
});

it("It's defined.", () => {
  expect(typographicGrid).not.toBeNull();
});
