import { useLinkStyle } from "./";

it("Works with the default style", () => {
  expect(useLinkStyle("default")).not.toBeNull();
});
