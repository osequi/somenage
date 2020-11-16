import { useModularScale } from ".";

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
