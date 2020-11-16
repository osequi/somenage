import { useBreakpoint } from ".";

it("Works for a multiple elements array ", () => {
  expect(useBreakpoint(["mobile", "tablet"]).length).toBe(2);
});

it("Works for a single element array ", () => {
  expect(useBreakpoint(["mobile"]).length).toBe(1);
});

it("Works for a single name", () => {
  expect(useBreakpoint("mobile")).toContain("@media(min-width");
});

it("Returns an Emotion friendly query", () => {
  expect(useBreakpoint("mobile")).toContain("@media(min-width");
});

it("Returns a `min-width` query", () => {
  expect(useBreakpoint("mobile")).toContain("min-width");
});

/**
 * Invalid arguments cannot be passed, like useBreakpoint() or useBreakpoint('mobilex').
 * These tests will fail instantly without useBreakpoint being called.
 *
 * However there are situations when the arguments are calculated runtime and TypeScript cannot catch the wrong values to be passed.
 */
