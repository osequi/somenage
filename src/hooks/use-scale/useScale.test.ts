import { useScale, useScaleWithSettings } from ".";

it("Works with an array scales and points", () => {
  expect(
    useScaleWithSettings([
      { point: 1, scale: { name: "linear" } },
      { point: 1, scale: { name: "modular" } },
    ])
  ).toStrictEqual([
    {
      fontSize: "2em",
    },
    {
      fontSize: "1.25em",
    },
  ]);
});

it("Works with an array of a single scale and point", () => {
  expect(
    useScaleWithSettings([{ point: 1, scale: { name: "linear" } }])
  ).toStrictEqual([
    {
      fontSize: "2em",
    },
  ]);
});

it("Works with a single scale and point", () => {
  expect(
    useScaleWithSettings({ point: 1, scale: { name: "linear" } })
  ).toStrictEqual({
    fontSize: "2em",
  });
});

it("Works with an array of numbers", () => {
  expect(useScale([1, 2])).toStrictEqual([
    { fontSize: "2em" },
    { fontSize: "3em" },
  ]);
});

it("Works with an array of a single number", () => {
  expect(useScale([1])).toStrictEqual([{ fontSize: "2em" }]);
});

it("Works with a single number", () => {
  expect(useScale(1)).toStrictEqual({
    fontSize: "2em",
  });
});
