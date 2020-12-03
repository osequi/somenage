import { useHeadings } from ".";

it("Works with the differentSizes preset + custom preset", () => {
  // Test copied from useDifferentSizedHeadings
  expect(
    useHeadings("differentSizes", {
      font: "Default",
      lineHeight: 1,
      scale: { name: "linear" },
      points: 3,
    })["& h1"]["fontSize"]
  ).toStrictEqual("4em");
});

it("Works with the differentSizes preset", () => {
  // Test copied from useDifferentSizedHeadings
  expect(useHeadings("differentSizes")["& h1"]["fontSize"]).toBeUndefined;
});

it("Works with the sameSize preset + custom settings", () => {
  // Test copied from useSameSizeHeadings
  expect(
    useHeadings("sameSize", {
      font: "Default",
      lineHeight: 1,
      scale: { name: "linear" },
      points: 3,
    })["& h1, h2, h3, h4, h5, h6"]["fontSize"]
  ).toStrictEqual("4em");
});

it("Works with the sameSize preset", () => {
  // Test copied from useSameSizeHeadings
  expect(useHeadings("sameSize")["& h1, h2, h3, h4, h5, h6"]["fontSize"])
    .toBeUndefined;
});
