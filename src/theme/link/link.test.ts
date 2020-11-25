import { links, linkPresetNames } from ".";

it("All links are defined.", () => {
  expect(links.length).toBe(linkPresetNames.length);
});

it("It's defined.", () => {
  expect(links).not.toBeNull();
});
