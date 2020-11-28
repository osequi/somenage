import { linkStyles, linkStylePresetNames } from ".";

it("All link styles are defined.", () => {
  expect(linkStyles.length).toBe(linkStylePresetNames.length);
});

it("It's defined.", () => {
  expect(linkStyles).not.toBeNull();
});
