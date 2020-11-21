import { useHeadings } from ".";

it("Works with multiple arguments", () => {
  expect(
    useHeadings([
      {
        preset: "sameSize",
        settings: { font: "Default", lineHeight: 1, scale: { points: 3 } },
      },
      {
        preset: "differentSizes",
        settings: { font: "Default", lineHeight: 1, scale: { points: [1, 2] } },
      },
    ])
  ).toHaveLength(2);
});

it("Works with a single argument", () => {
  expect(
    useHeadings({
      preset: "sameSize",
      settings: { font: "Default", lineHeight: 1, scale: { points: 3 } },
    })
  ).not.toBeNull();
});
