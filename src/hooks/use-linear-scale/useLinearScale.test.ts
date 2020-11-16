import { useLinearScale } from ".";

it("Works", () => {
  expect(useLinearScale(1)).toBe(2);
  expect(useLinearScale(2)).toBe(3);
});
