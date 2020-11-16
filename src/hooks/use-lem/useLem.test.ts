import { useLem } from ".";

it("Fails back silently with empty font sizes", () => {
  expect(useLem({ fontSizes: [], lineHeight: 1.25 })).toBe(0);
});

it("Performs well the calculations", () => {
  expect(useLem({ fontSizes: [110], lineHeight: 1.25 })).toBe(1.375);
});

it("Works with params", () => {
  expect(useLem({ fontSizes: [100], lineHeight: 1.25 })).toBe(1.25);
});

it("Works without params", () => {
  expect(useLem()).not.toBeNull();
});
