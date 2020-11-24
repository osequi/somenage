import { useScale } from ".";

it("Works with a custom modular scale", () => {
  expect(
    useScale(1, null, {
      name: "modular",
      settings: { base: [1], ratio: 1.333 },
    })
  ).toStrictEqual({ fontSize: "1.333em" });
});

it("Works with an array of points, modular scale", () => {
  expect(useScale([1, 2], "modular")).toStrictEqual([
    { fontSize: "1.25em" },
    { fontSize: "1.5625em" },
  ]);
});

it("Works with a single point, modular scale", () => {
  expect(useScale(1, "modular")).toStrictEqual({ fontSize: "1.25em" });
});

it("Works with an array of points, linear scale", () => {
  expect(useScale([1, 2], "linear")).toStrictEqual([
    { fontSize: "2em" },
    { fontSize: "3em" },
  ]);
});

it("Works with a single point, linear scale", () => {
  expect(useScale(1, "linear")).toStrictEqual({ fontSize: "2em" });
});
