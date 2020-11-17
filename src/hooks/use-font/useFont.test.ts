import { useFont } from ".";

it("Works with a simple string argument", () => {
  expect(useFont("Default")).not.toBeNull();
});

it("Works with an array argument", () => {
  expect(useFont(["Default"])).not.toBeNull();
});

it("Returns multiple fonts", () => {
  expect(useFont(["Default", "Nimbus Sans Medium"])).toHaveLength(2);
});
