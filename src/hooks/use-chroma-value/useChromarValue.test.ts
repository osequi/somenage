import { useChromaValue } from ".";

it("Works with a float", () => {
  expect(useChromaValue(1.123456789, 2)).toBe(1.12);
});

it("Works with a natural number", () => {
  expect(useChromaValue(1, 1)).toBe(1.0);
});
