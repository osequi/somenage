import { renderHook } from "@testing-library/react-hooks";
import "@testing-library/jest-dom/extend-expect";
import { useMediaQuery } from ".";

it("Works with a brealpoint name", () => {
  const { result } = renderHook(() => useMediaQuery("mobile"));
  expect(result.current).toBe(false);
});

it("Fails back silently with no arguments", () => {
  const { result } = renderHook(() => useMediaQuery());
  expect(result.current).toBeNull();
});
