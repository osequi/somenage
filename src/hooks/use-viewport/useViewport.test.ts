import { renderHook } from "@testing-library/react-hooks";
import "@testing-library/jest-dom/extend-expect";
import { ResponsiveContextProvider } from "@pages/_app";
import { useViewport } from ".";

it("Works with <", () => {
  const wrapper = ({ children }) => ResponsiveContextProvider(768, children);
  const { result } = renderHook(() => useViewport("<tablet"), { wrapper });
  expect(result.current).toBe(false);
});

it("Works with <=", () => {
  const wrapper = ({ children }) => ResponsiveContextProvider(768, children);
  const { result } = renderHook(() => useViewport("<=tablet"), { wrapper });
  expect(result.current).toBe(true);
});

it("Works with >", () => {
  const wrapper = ({ children }) => ResponsiveContextProvider(768, children);
  const { result } = renderHook(() => useViewport(">tablet"), { wrapper });
  expect(result.current).toBe(false);
});

it("Works with >=", () => {
  const wrapper = ({ children }) => ResponsiveContextProvider(768, children);
  const { result } = renderHook(() => useViewport(">=tablet"), { wrapper });
  expect(result.current).toBe(true);
});

it("Works without operators", () => {
  const wrapper = ({ children }) => ResponsiveContextProvider(768, children);
  const { result } = renderHook(() => useViewport("tablet"), { wrapper });
  expect(result.current).toBe(true);
});

it("Fails back silently with incomplete argument '<'", () => {
  const { result } = renderHook(() => useViewport("<"));
  expect(result.current).toBeNull();
});

it("Fails back silently with incomplete argument '<='", () => {
  const { result } = renderHook(() => useViewport("<="));
  expect(result.current).toBeNull();
});

it("Fails back silently with wrong argument '<=nobreakpointname'", () => {
  const { result } = renderHook(() => useViewport("<=nobreakpointname"));
  expect(result.current).toBeNull();
});

it("Fails back silently with wrong argument 'xx'", () => {
  const { result } = renderHook(() => useViewport("xx"));
  expect(result.current).toBeNull();
});

it("Fails back silently with no arguments", () => {
  const { result } = renderHook(() => useViewport());
  expect(result.current).toBeNull();
});
