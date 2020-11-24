import { useLinearScale } from ".";

it("Works without args", () => {
  expect(useLinearScale(null)).toBeNull();
});

it("Works with an array entry", () => {
  expect(useLinearScale([2, 3])).toStrictEqual([3, 4]);
});

it("Works with a single element array entry", () => {
  expect(useLinearScale([1])).toStrictEqual([2]);
});

it("Works with a single entry", () => {
  expect(useLinearScale(1)).toBe(2);
});
