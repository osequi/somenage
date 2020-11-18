import { useScale, useScales } from ".";

it("useScales - Works with an array scales and points", () => {
  expect(
    useScales([
      { points: 1, scale: { name: "linear" } },
      { points: 1, scale: { name: "modular" } },
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

it("useScales - Works with an array of a single scale and point", () => {
  expect(useScales([{ points: 1, scale: { name: "linear" } }])).toStrictEqual([
    {
      fontSize: "2em",
    },
  ]);
});

it("useScales - Works with a single scale and point", () => {
  expect(useScales({ points: 1, scale: { name: "linear" } })).toStrictEqual({
    fontSize: "2em",
  });
});

it("useScale - Works with an array of numbers", () => {
  expect(useScale([1, 2])).toStrictEqual([
    { fontSize: "2em" },
    { fontSize: "3em" },
  ]);
});

it("useScale - Works with an array of a single number", () => {
  expect(useScale([1])).toStrictEqual([{ fontSize: "2em" }]);
});

it("useScale - Works with a single number", () => {
  expect(useScale(1)).toStrictEqual({
    fontSize: "2em",
  });
});
