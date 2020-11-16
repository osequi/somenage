import { modularScaleSettings } from ".";

it("Base is defined.", () => {
  expect(modularScaleSettings.base).not.toBeNull();
});

it("Ratio is defined.", () => {
  expect(modularScaleSettings.ratio).not.toBeNull();
});

it("It's defined.", () => {
  expect(modularScaleSettings).not.toBeNull();
});
