import { fonts, fontNames } from "./";

it("All fonts are defined.", () => {
  expect(fonts.length).toBe(fontNames.length);
});

it("The default font is defined.", () => {
  expect(fonts.length).not.toBeNull();
});
