import { useLink } from "./";

it("Works with the default style", () => {
  expect(useLink("default")).not.toBeNull();
});
