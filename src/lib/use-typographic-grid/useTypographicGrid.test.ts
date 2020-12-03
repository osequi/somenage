import { useTypographicGrid } from ".";

it("Fails back safely when there are more font sizes than breakpoints", () => {
  const r = useTypographicGrid("object", {
    fontSizes: [100, 100, 110, 120, 130, 140, 150, 160],
    lineHeight: 1,
  });
  expect(Object.keys(r).length).toBe(7);
});

it("Works with custom font sizes", () => {
  const r = useTypographicGrid("object", {
    fontSizes: [100, 100],
    lineHeight: 1,
  });
  expect(Object.keys(r).length).toBe(4);
});

it("Fails back silently when only the default font size is defined", () => {
  const r = useTypographicGrid("object", { fontSizes: [100], lineHeight: 1 });
  expect(Object.keys(r).length).toEqual(3);
});

it("Works with the object notation", () => {
  expect(useTypographicGrid("object")).not.toBeNull();
});

it("Works with the string notation", () => {
  expect(useTypographicGrid("string")).not.toBeNull();
});
