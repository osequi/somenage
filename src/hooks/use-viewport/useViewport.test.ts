import { renderHook } from "@testing-library/react-hooks";
import "@testing-library/jest-dom/extend-expect";
import { useViewport } from ".";

/**
 * We don't have a browser, so we don't have a viewport.
 * If the hook returns false it means the `useMediaQuery` hook was reached. Which is good.
 */

it("Works with <", () => {
  const { result } = renderHook(() => useViewport("<laptop"));
  expect(result.current).toBe(false);
});

it("Works with <=", () => {
  const { result } = renderHook(() => useViewport("<=laptop"));
  expect(result.current).toBe(false);
});

it("Works with >", () => {
  const { result } = renderHook(() => useViewport(">laptop"));
  expect(result.current).toBe(false);
});

it("Works with >=", () => {
  const { result } = renderHook(() => useViewport(">=laptop"));
  expect(result.current).toBe(false);
});

it("Works without operators", () => {
  const { result } = renderHook(() => useViewport("laptop"));
  expect(result.current).toBe(false);
});

it("Fails back silently with '<'", () => {
  const { result } = renderHook(() => useViewport("<"));
  expect(result.current).toBeNull();
});

it("Fails back silently with '<='", () => {
  const { result } = renderHook(() => useViewport("<="));
  expect(result.current).toBeNull();
});

it("Fails back silently with '<=nobreakpointname'", () => {
  const { result } = renderHook(() => useViewport("<=nobreakpointname"));
  expect(result.current).toBeNull();
});

it("Fails back silently with 'xx'", () => {
  const { result } = renderHook(() => useViewport("xx"));
  expect(result.current).toBeNull();
});

it("Fails back silently with no arguments", () => {
  const { result } = renderHook(() => useViewport());
  expect(result.current).toBeNull();
});
