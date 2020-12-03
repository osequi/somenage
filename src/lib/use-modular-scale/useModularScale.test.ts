import { useModularScale } from ".";

/**
i

it("Fails back safely when no settings, and the theme has no modular scale set up", () => {
  expect(useModularScale(1)).toBeNull();
});

it("Fails back safely with the wrong settings 2", () => {
  expect(useModularScale(1, { name: "modular", settings: {} })).toBeNull();
});


*/
it("Fails back safely when no args", () => {
  expect(useModularScale(null)).toBeNull();
});

it("Fails back safely with the wrong settings", () => {
  expect(useModularScale(1, { base: null })).toBeNull();
});

it("Works with an array of points + settings", () => {
  expect(useModularScale([1, 2], { base: [1], ratio: 1.33 })).toStrictEqual([
    1.33,
    1.7689000000000001,
  ]);
});

it("Works with a single point + settings", () => {
  expect(
    useModularScale(1, {
      base: [1],
      ratio: 1.33,
    })
  ).toBe(1.33);
});

it("Works with an array of points. Settings taken from theme", () => {
  expect(useModularScale([1, 2])).toStrictEqual([1.25, 1.5625]);
});

it("Works with a point. Settings taken from theme", () => {
  expect(useModularScale(1)).toBe(1.25);
});
