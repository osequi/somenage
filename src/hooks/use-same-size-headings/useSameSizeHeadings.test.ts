import { useSameSizeHeadings } from "./";

it("Fails back on theme when no args", () => {
  expect(useSameSizeHeadings(null)["& h1, h2, h3, h4, h5, h6"]["fontSize"])
    .toBeUndefined;
});

it("Fails back on wrongly set points", () => {
  expect(
    useSameSizeHeadings({
      font: "Default",
      lineHeight: 1,
      scale: { name: "linear" },
      points: [3, 4, 5],
    })["& h1, h2, h3, h4, h5, h6"]["fontSize"]
  ).toStrictEqual("4em");
});

it("Works with a custom scale", () => {
  expect(
    useSameSizeHeadings({
      font: "Default",
      lineHeight: 1,
      scale: { name: "modular", settings: { base: [1], ratio: 1.333 } },
      points: 1,
    })["& h1, h2, h3, h4, h5, h6"]["fontSize"]
  ).toStrictEqual("1.333em");
});

it("Works", () => {
  expect(
    useSameSizeHeadings({
      font: "Default",
      lineHeight: 1,
      scale: { name: "linear" },
      points: 3,
    })["& h1, h2, h3, h4, h5, h6"]["fontSize"]
  ).toStrictEqual("4em");
});
