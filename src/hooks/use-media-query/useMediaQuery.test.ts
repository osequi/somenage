import { renderHook } from "@testing-library/react-hooks";
import "@testing-library/jest-dom/extend-expect";
import { ResponsiveContextProvider } from "@pages/_app";
import { useMediaQuery } from ".";

it("Works with pixel (>)", () => {
  const wrapper = ({ children }) => ResponsiveContextProvider(768, children);
  const { result } = renderHook(() => useMediaQuery("tablet", "min-width", 1), {
    wrapper,
  });
  expect(result.current).toBe(false);
});

it("Works with min-width (>=), 2", () => {
  const wrapper = ({ children }) => ResponsiveContextProvider(767, children);
  const { result } = renderHook(() => useMediaQuery("tablet", "min-width"), {
    wrapper,
  });
  expect(result.current).toBe(false);
});

it("Works with min-width (>=)", () => {
  const wrapper = ({ children }) => ResponsiveContextProvider(768, children);
  const { result } = renderHook(() => useMediaQuery("tablet", "min-width"), {
    wrapper,
  });
  expect(result.current).toBe(true);
});

it("Works with pixel (<)", () => {
  const wrapper = ({ children }) => ResponsiveContextProvider(768, children);
  const { result } = renderHook(
    () => useMediaQuery("mobile", "max-width", -1),
    {
      wrapper,
    }
  );
  expect(result.current).toBe(false);
});

it("Works with max-width (<=), 2", () => {
  const wrapper = ({ children }) => ResponsiveContextProvider(769, children);
  const { result } = renderHook(() => useMediaQuery("mobile", "max-width"), {
    wrapper,
  });
  expect(result.current).toBe(false);
});

it("Works with max-width (<=)", () => {
  const wrapper = ({ children }) => ResponsiveContextProvider(768, children);
  const { result } = renderHook(() => useMediaQuery("mobile", "max-width"), {
    wrapper,
  });
  expect(result.current).toBe(true);
});

it("Works with breakpoint name, 3", () => {
  const wrapper = ({ children }) => ResponsiveContextProvider(768, children);
  const { result } = renderHook(() => useMediaQuery("tablet"), { wrapper });
  expect(result.current).toBe(true);
});

it("Works with breakpoint name, 2", () => {
  const wrapper = ({ children }) => ResponsiveContextProvider(768, children);
  const { result } = renderHook(() => useMediaQuery("mobile"), { wrapper });
  expect(result.current).toBe(false);
});

it("Works with breakpoint name", () => {
  const wrapper = ({ children }) => ResponsiveContextProvider(767, children);
  const { result } = renderHook(() => useMediaQuery("mobile"), { wrapper });
  expect(result.current).toBe(true);
});

it("Fails back silently with no arguments", () => {
  const { result } = renderHook(() => useMediaQuery());
  expect(result.current).toBeNull();
});
