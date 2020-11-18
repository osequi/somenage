import { sameSize } from "./";

it("Works with a multiple scales", () => {
  expect(
    sameSize({
      preset: "sameSize",
      settings: {
        font: "Default",
        lineHeight: 1,
        scale: { points: [1, 2, 3, 4, 5, 6] },
      },
    })["& h1, h2, h3, h4, h5, h6"]["fontSize"]
  ).toStrictEqual("2em");
});

it("Works with a well set scale", () => {
  expect(
    sameSize({
      preset: "sameSize",
      settings: {
        font: "Default",
        lineHeight: 1,
        scale: { points: 3 },
      },
    })["& h1, h2, h3, h4, h5, h6"]["fontSize"]
  ).toStrictEqual("4em");
});
