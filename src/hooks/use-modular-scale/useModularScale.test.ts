import { useModularScale } from ".";

it("Fails back safely when no args", () => {
  expect(useModularScale(null)).toBeNull();
});

it("Fails back safely when no settings, and the theme has no modular scale set up", () => {
  expect(useModularScale(1)).toBeNull();
});

it("Fails back safely with the wrong settings 2", () => {
  expect(useModularScale(1, { name: "modular", settings: {} })).toBeNull();
});

it("Fails back safely with the wrong settings", () => {
  expect(useModularScale(1, { name: "linear" })).toBeNull();
});

it("Works with an array of points", () => {
  expect(
    useModularScale([1, 2], {
      name: "modular",
      settings: { base: [1], ratio: 1.33 },
    })
  ).toStrictEqual([1.33, 1.7689000000000001]);
});

it("Works with a single point", () => {
  expect(
    useModularScale(1, {
      name: "modular",
      settings: { base: [1], ratio: 1.33 },
    })
  ).toBe(1.33);
});
