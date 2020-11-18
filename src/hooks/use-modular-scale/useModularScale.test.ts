import { useModularScale } from ".";

it("Works with an array of points", () => {
  expect(useModularScale([1, 2])).toStrictEqual([1.25, 1.5625]);
});

it("Works with settings", () => {
  expect(
    useModularScale(1, {
      name: "modular",
      settings: { base: [1], ratio: 1.33 },
    })
  ).toBe(1.33);
});

it("Works without settings, when the theme scale is linear", () => {
  expect(useModularScale(1)).toBe(1.25);
});
