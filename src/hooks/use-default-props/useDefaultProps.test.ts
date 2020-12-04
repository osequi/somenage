import { useDefaultProps } from ".";

it("Works with null arguments", () => {
  expect(useDefaultProps(null, null)).toBeNull();
});

it("Works with null default props", () => {
  expect(useDefaultProps({ preset: "differentSizes" }, null)).toStrictEqual({
    preset: "differentSizes",
  });
});

it("Works with empty default props", () => {
  expect(useDefaultProps({ preset: "differentSizes" }, {})).toStrictEqual({
    preset: "differentSizes",
  });
});

it("Works with null props", () => {
  expect(useDefaultProps(null, { preset: "differentSizes" })).toStrictEqual({
    preset: "differentSizes",
  });
});

it("Works with empty props", () => {
  expect(useDefaultProps({}, { preset: "differentSizes" })).toStrictEqual({
    preset: "differentSizes",
  });
});

it("Works", () => {
  expect(
    useDefaultProps(
      {
        preset: "differentSizes",
        settings: {
          font: "Default",
          lineHeight: 1,
          scale: { points: [1, 2, 3, 4, 5, 6, 7] },
        },
      },
      {
        preset: "differentSizes",
        settings: {
          font: "Nimbus Sans Bold",
          lineHeight: 1.1,
          scale: { points: [1] },
        },
      }
    )
  ).toStrictEqual({
    preset: "differentSizes",
    settings: {
      font: "Default",
      lineHeight: 1,
      scale: { points: [1, 2, 3, 4, 5, 6, 7] },
    },
  });
});
