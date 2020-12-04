import { useMaxWidth } from "./";

it("Works with the `text` param", () => {
  expect(
    useMaxWidth(null, { maxWidth: 10, maxWidthExceptions: "h1" })
  ).toStrictEqual({
    [`& > *h1`]: {
      maxWidth: "calc(10 * var(--lem))",
    },
  });
});

it("Works with the `width` param", () => {
  expect(useMaxWidth(10)).toStrictEqual({
    [`& > *:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)`]: {
      maxWidth: "calc(10 * var(--lem))",
    },
  });
});

it("Works with null params", () => {
  expect(useMaxWidth(null)).toStrictEqual({
    [`& > *:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)`]: {
      maxWidth: "calc(35 * var(--lem))",
    },
  });
});

it("Works without params", () => {
  expect(useMaxWidth()).toStrictEqual({
    [`& > *:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)`]: {
      maxWidth: "calc(35 * var(--lem))",
    },
  });
});
