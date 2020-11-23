import { useChromaValue } from ".";

it("Fails back with the missing number argument", () => {
  expect(useChromaValue(null, 2)).toBeNull;
});

it("Fails back with the missing decimals argument", () => {
  expect(useChromaValue(1.123456789, null)).toBe(1);
});

it("Works with a float", () => {
  expect(useChromaValue(1.123456789, 2)).toBe(1.12);
});

it("Works with a natural number", () => {
  expect(useChromaValue(1, 1)).toBe(1.0);
});
