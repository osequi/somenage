import { useScales } from ".";

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

it("useScales - Works with an array of points", () => {
  expect(useScales([{ points: 1, scale: { name: "linear" } }])).toStrictEqual([
    {
      fontSize: "2em",
    },
  ]);
});

it("useScales - Works with a single point", () => {
  expect(useScales({ points: 1, scale: { name: "linear" } })).toStrictEqual({
    fontSize: "2em",
  });
});
