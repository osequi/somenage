import { useScale } from ".";

it("Works with a single entry", () => {
  expect(useScale({ point: 1, scale: { name: "linear" } })).toStrictEqual({
    fontSize: "2em",
  });
});
