import { useContext } from "react";
import { renderHook } from "@testing-library/react-hooks";
import "@testing-library/jest-dom/extend-expect";
import { useTheme } from ".";
import { ThemeContext } from "@pages/_app";

it("Works with a theme provider / context", () => {
  const { result: result1 } = renderHook(() => useTheme());
  const { result: result2 } = renderHook(() => useContext(ThemeContext));
  expect(result1).toEqual(result2);
});

it("Fails back when there is no theme provider / context", () => {
  const { result } = renderHook(() => useTheme());
  expect(result).not.toBeNull();
});
