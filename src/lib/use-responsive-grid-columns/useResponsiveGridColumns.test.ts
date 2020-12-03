import { useResponsiveGridColumns } from ".";

it("Fails back silently with no args", () => {
  expect(useResponsiveGridColumns(null)).toBeNull();
});

it("Fails back silently when there are more columns than breakpoints", () => {
  const r = useResponsiveGridColumns([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(Object.keys(r).length).toBe(4);
});

it("Works with an array of arguments", () => {
  expect(useResponsiveGridColumns([1, 2])).toStrictEqual({
    "@media(min-width: 320px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
    "@media(min-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  });
});

it("Works with an array of arguments, and the array has a single element", () => {
  expect(useResponsiveGridColumns([1])).toStrictEqual({
    "@media(min-width: 320px)": { gridTemplateColumns: "repeat(1, 1fr)" },
  });
});

it("Works with a single number argument", () => {
  expect(useResponsiveGridColumns(1)).toStrictEqual({
    "@media(min-width: 320px)": { gridTemplateColumns: "repeat(1, 1fr)" },
  });
});
