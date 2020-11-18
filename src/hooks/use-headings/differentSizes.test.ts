import { differentSizes } from "./";

it("Works with more than 6 heading sizes defined", () => {
  expect(
    differentSizes({
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
    differentSizes({
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
    differentSizes({
      preset: "differentSizes",
      settings: { font: "Default", lineHeight: 1, scale: { points: [1, 2] } },
    })["& h1"]
  ).toStrictEqual({ fontSize: "3em" });
});

it("Works with a single heading size", () => {
  expect(
    differentSizes({
      preset: "differentSizes",
      settings: { font: "Default", lineHeight: 1, scale: { points: 1 } },
    })["& h1"]
  ).toStrictEqual({ fontSize: "2em" });
});
