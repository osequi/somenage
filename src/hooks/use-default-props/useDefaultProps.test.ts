import { useDefaultProps } from ".";

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
