import { renderHook } from "@testing-library/react-hooks";
import "@testing-library/jest-dom/extend-expect";
import { ResponsiveContextProvider } from "@pages/_app";
import { useMediaQuery } from ".";

it("Works with a breakpoint name", () => {
  const wrapper = ({ children }) => ResponsiveContextProvider(400, children);
  const { result } = renderHook(() => useMediaQuery("mobile"), { wrapper });
  expect(result.current).toBe(true);
});

it("Fails back silently with no arguments", () => {
  const { result } = renderHook(() => useMediaQuery());
  expect(result.current).toBeNull();
});
