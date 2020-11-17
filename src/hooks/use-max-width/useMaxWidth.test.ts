import { useMaxWidth } from "./";

it("Works with params", () => {
  expect(useMaxWidth({ maxWidth: 10, maxWidthExceptions: "h1" })).toStrictEqual(
    {
      [`& > *h1`]: {
        maxWidth: "calc(10 * var(--lem))",
      },
    }
  );
});

it("Works without params", () => {
  expect(useMaxWidth()).toStrictEqual({ maxWidth: "calc(35 * var(--lem))" });
});
