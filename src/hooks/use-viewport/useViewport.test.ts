import { useViewport } from ".";

it("Fails back silently with no arguments", () => {
  expect(useViewport()).toBeNull();
});
