import { typographicScale } from ".";

it("Name is defined.", () => {
  expect(typographicScale.name).not.toBeNull();
});

it("Settings are defined.", () => {
  expect(typographicScale.settings).not.toBeNull();
});

it("It's defined.", () => {
  expect(typographicScale).not.toBeNull();
});
