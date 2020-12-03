import { renderHook } from "@testing-library/react-hooks";
import "@testing-library/jest-dom/extend-expect";
import { useTheme } from ".";
import { ThemeContextProvider } from "@pages/_app";
import { theme } from "@theme";

it("Works with a theme provider / context", () => {
  const wrapper = ({ children }) => ThemeContextProvider(theme, children);
  const { result } = renderHook(() => useTheme(), { wrapper });
  expect(result.current).toEqual(theme);
});

it("Fails back when there is no theme provider / context", () => {
  const { result } = renderHook(() => useTheme());
  expect(result.current).toBeNull();
});
