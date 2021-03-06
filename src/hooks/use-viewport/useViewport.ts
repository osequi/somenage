import type { TBreakpointNames } from "@theme";
import { theme } from "@theme";
import { useMediaQuery } from "@hooks";

/**
 * Tells if the current viewport satisfies a breakpoint query.
 * @param	viewport		A query with a breakpoint.
 * @param	changeHandler	A function which handles the viewport changes.
 * @return					True if the viewport satisfies the query.
 * @category Hooks
 * @example
 * useViewport('<laptop') => max-width: 1280px
 * useViewport('<=laptop') => max-width: 1599px
 * useViewport(>tablet) => min-width: 769px
 * useViewport(>=tablet) => min-width: 768px
 * useViewport(tablet) => min-width: 321px, max-width: 1279px
 */
const useViewport = (
  viewport?: string,
  changeHandler?: () => void
): boolean | null => {
  if (!viewport) return null;
  if (viewport.length < 2) return null;

  const breakpoints = theme?.breakpoints;
  if (!breakpoints) return null;

  const firstChar = viewport[0];
  const secondChar = viewport[1];

  const operator =
    firstChar === "<" || firstChar === ">"
      ? secondChar === "="
        ? `${firstChar}${secondChar}`
        : firstChar
      : "none";

  const breakpointName: TBreakpointNames =
    firstChar === "<" || firstChar === ">"
      ? secondChar === "="
        ? (viewport.slice(2) as TBreakpointNames)
        : (viewport.slice(1) as TBreakpointNames)
      : (viewport as TBreakpointNames);

  const breakpoint =
    breakpoints && breakpoints.find((item) => item.name === breakpointName);
  if (!breakpoint?.value) return null;

  switch (operator) {
    case "<":
      return useMediaQuery(breakpointName, "max-width", -1, changeHandler);
    case "<=":
      return useMediaQuery(breakpointName, "max-width", 0, changeHandler);
    case ">":
      return useMediaQuery(breakpointName, "min-width", 1, changeHandler);
    case ">=":
      return useMediaQuery(breakpointName, "min-width", 0, changeHandler);
    case "none":
      return useMediaQuery(breakpointName, "none", null, changeHandler);
  }
};

export default useViewport;
