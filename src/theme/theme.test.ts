import { theme } from ".";

it("It has an entry for typography.", () => {
  expect(theme.typography).not.toBeNull();
});

it("It has an entry for breakpoints.", () => {
  expect(theme.breakpoints).not.toBeNull();
});

it("It's defined.", () => {
  expect(theme).not.toBeNull();
});
