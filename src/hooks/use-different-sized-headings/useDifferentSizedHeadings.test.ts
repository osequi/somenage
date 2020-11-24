import { useDifferentSizedHeadings } from "./";

it("Given arguments overwrite arguments from theme", () => {
  expect(
    useDifferentSizedHeadings({
      preset: "differentSizes",
      settings: {
        lineHeight: 100,
      },
    })["& h1, h2, h3, h4, h5, h6"]["lineHeight"]
  ).toBe(100);
});

it("Works without arguments", () => {
  expect(useDifferentSizedHeadings()).not.toBeNull();
});

it("Works with more than 6 heading sizes defined", () => {
  expect(
    useDifferentSizedHeadings({
      preset: "differentSizes",
      settings: {
        font: "Default",
        lineHeight: 1,
        scale: { points: [1, 2, 3, 4, 5, 6, 7] },
      },
    })["& h1"]
  ).toStrictEqual({ fontSize: "7em" });
});

it("Works with all heading sizes defined", () => {
  expect(
    useDifferentSizedHeadings({
      preset: "differentSizes",
      settings: {
        font: "Default",
        lineHeight: 1,
        scale: { points: [1, 2, 3, 4, 5, 6] },
      },
    })["& h1"]
  ).toStrictEqual({ fontSize: "7em" });
});

it("Works with multiple heading sizes", () => {
  expect(
    useDifferentSizedHeadings({
      preset: "differentSizes",
      settings: { font: "Default", lineHeight: 1, scale: { points: [1, 2] } },
    })["& h1"]
  ).toStrictEqual({ fontSize: "3em" });
});

it("Works with a single heading size", () => {
  expect(
    useDifferentSizedHeadings({
      preset: "differentSizes",
      settings: { font: "Default", lineHeight: 1, scale: { points: 1 } },
    })["& h1"]
  ).toStrictEqual({ fontSize: "2em" });
});

it("Works", () => {
  expect(
    useDifferentSizedHeadings({
      preset: "differentSizes",
      settings: {
        font: "Default",
        lineHeight: 1,
        scale: { points: [1, 2, 3, 4, 5, 6] },
      },
    })
  ).toBeNull();
});
