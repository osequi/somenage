import { useResponsiveFontSizes } from ".";

it("Fails back safely when there are more font sizes than breakpoints", () => {
  const r = useResponsiveFontSizes("object", {
    fontSizes: [100, 100, 110, 120, 130, 140, 150, 160],
    lineHeight: 1,
  });
  expect(Object.keys(r).length).toBe(4);
});

it("Works with custom font sizes", () => {
  const r = useResponsiveFontSizes("object", {
    fontSizes: [100, 100],
    lineHeight: 1,
  });
  expect(Object.keys(r).length).toBe(1);
});

it("Fails back silently when only the default font size is defined", () => {
  expect(
    useResponsiveFontSizes("object", { fontSizes: [100], lineHeight: 1 })
  ).toEqual({});
});

it("Works with the object notation", () => {
  expect(useResponsiveFontSizes("object")).not.toBeNull();
});

it("Works with the string notation", () => {
  expect(useResponsiveFontSizes("string")).not.toBeNull();
});
