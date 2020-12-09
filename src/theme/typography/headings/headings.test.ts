import { headings, headingsPresetNames } from "./";

it("All available presets are set up.", () => {
  expect(headings.length).toBe(headingsPresetNames.length);
});
