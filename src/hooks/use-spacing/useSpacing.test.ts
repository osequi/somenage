import { useSpacing } from ".";

it("Works with a valid preset", () => {
  expect(useSpacing("Adjacent siblings margin top")).not.toBeNull();
});
