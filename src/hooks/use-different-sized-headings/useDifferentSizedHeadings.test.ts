import { useDifferentSizedHeadings } from "./";

it("Fails back on theme when no args", () => {
  expect(useDifferentSizedHeadings(null)["& h1"]["fontSize"]).toBeUndefined;
});

it("Works with a custom scale", () => {
  expect(
    useDifferentSizedHeadings({
      font: "Default",
      lineHeight: 1,
      scale: { name: "modular", settings: { base: [1], ratio: 1.333 } },
      points: 3,
    })["& h1"]["fontSize"]
  ).toStrictEqual("2.3685930369999997em");
});

it("Works with an array of points", () => {
  expect(
    useDifferentSizedHeadings({
      font: "Default",
      lineHeight: 1,
      scale: { name: "linear" },
      points: [3, 4, 5],
    })["& h1"]["fontSize"]
  ).toStrictEqual("6em");
});

it("Works with an array of a single point", () => {
  expect(
    useDifferentSizedHeadings({
      font: "Default",
      lineHeight: 1,
      scale: { name: "linear" },
      points: [3],
    })["& h1"]["fontSize"]
  ).toStrictEqual("4em");
});

it("Works with a single point", () => {
  expect(
    useDifferentSizedHeadings({
      font: "Default",
      lineHeight: 1,
      scale: { name: "linear" },
      points: 3,
    })["& h1"]["fontSize"]
  ).toStrictEqual("4em");
});
