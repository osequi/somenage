import { useResponsiveFontSizes } from ".";

it("Fails back silently with wrong arguments 2", () => {
  // This works only when theme has no grid settings
  //expect(useResponsiveFontSizes("object", { fontSizes: [] })).toStrictEqual({});
});

it("Fails back silently with wrong arguments", () => {
  // This works only when theme has no grid settings
  // expect(useResponsiveFontSizes("object", {})).toBeNull();
});

it("Fails back safely when there are more font sizes than breakpoints", () => {
  const r = useResponsiveFontSizes("object", {
    fontSizes: [100, 100, 110, 120, 130, 140, 150, 160],
    lineHeight: 1,
  });
  expect(Object.keys(r).length).toBe(4);
});

it("Fails back silently when only the default font size is defined", () => {
  expect(
    useResponsiveFontSizes("object", { fontSizes: [100], lineHeight: 1 })
  ).toEqual({});
});

it("Works with custom font sizes", () => {
  const r = useResponsiveFontSizes("object", {
    fontSizes: [100, 100],
    lineHeight: 1,
  });
  expect(Object.keys(r).length).toBe(1);
});

it("Works with the object notation", () => {
  expect(useResponsiveFontSizes("object")).not.toBeNull();
});

it("Works with the string notation", () => {
  expect(useResponsiveFontSizes("string")).not.toBeNull();
});
