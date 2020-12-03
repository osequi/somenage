import { useDecoration } from ".";

it("Fails back with no arguments", () => {
  expect(useDecoration()).toBeNull();
});

it("Fails back with wrong arguments", () => {
  expect(useDecoration("xxx", "zzz")).toBeNull();
});

it("Works with borders", () => {
  expect(useDecoration("borders", "default")).toStrictEqual({
    borderStyle: "solid",
    borderWidth: "1px",
  });
});
