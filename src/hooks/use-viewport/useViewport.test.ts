import { renderHook } from "@testing-library/react-hooks";
import "@testing-library/jest-dom/extend-expect";
import { useViewport } from ".";

it("Works with <", () => {
  const { result } = renderHook(() => useViewport("<laptop"));
  console.log("result:", result.current);
  expect(result.current).toBeNull();
});

it("Fails back silently with no arguments", () => {
  const { result } = renderHook(() => useViewport());
  expect(result.current).toBeNull();
});
