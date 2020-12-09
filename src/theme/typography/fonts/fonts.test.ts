import { fonts, fontNames } from "./";

it("All avilable fonts are set up.", () => {
  expect(fonts.length).toBe(fontNames.length);
});

it("The default font is defined.", () => {
  expect(fonts.length).not.toBeNull();
});
