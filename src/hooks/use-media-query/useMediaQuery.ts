import type { TBreakpointNames, TBreakpoint } from "@theme";
import { useMediaQuery as useMediaQueryRR } from "react-responsive";
import { theme } from "../../theme";

/**
 * Tells if the current viewport satisfies a breakpoint.
 * @param	breakpoint		The breakpoint name.
 * @param	width			The query type. When it's `max-width` the viewport should be less than the breakpoint value. On `min-width` the viewport should be larger than the breakpont value.
 * @param	pixel			Tells if the breakpoint value should be included into calculations. The formula where it is used is: `breakpoint.value + ${pixel}px`
 * @param	changeHandler	A function which handles the viewport changes.
 * @return					True if the viewport equals the breakpoint.
 * @category Hooks
 * @example
 * useMediaQuery('mobile') => true, if breakpoints['mobile'].value <= viewport size < breakpoints['tablet'].value
 * @example
 * useMediaQuery('mobile', 'max-width') => true, viewport size < breakpoints['tablet'].value
 * @example
 * useMediaQuery('mobile', 'max-width', -1) => true, viewport size < breakpoints['tablet'].value - 1
 */
const useMediaQuery = (
  breakpoint?: TBreakpointNames,
  width?: "max-width" | "min-width" | "none",
  pixel?: number | null,
  changeHandler?: () => void
): boolean | null => {
  if (!breakpoint) return null;

  const breakpoints = theme?.breakpoints;
  if (!breakpoints) return null;

  const breakpoint1Index = breakpoints.findIndex(
    (item: TBreakpoint) => item.name === breakpoint
  );
  if (breakpoint1Index === -1) return null;

  const breakpoint1 = breakpoints[breakpoint1Index];
  if (!breakpoint1.value) return null;

  const pixel2 = pixel ? pixel : 0;
  const width2 = width ? width : "none";

  /**
   * When  `<` or `>` a single query on a single breakpoint is returned.
   */
  if (width2 !== "none" && pixel2 !== 0) {
    return useMediaQueryRR(
      {
        query: `(${width}: ${breakpoint1.value + pixel2}px)`,
      },
      null,
      changeHandler
    );
  }

  /**
   * In all other cases a second breakpoint is needed.
   */
  const breakpoint2 =
    breakpoint1Index + 1 <= breakpoints.length
      ? breakpoints[breakpoint1Index + 1]
      : null;

  switch (width2) {
    case "max-width":
      return useMediaQueryRR(
        {
          query: `(${width2}: ${breakpoint2.value + pixel2}px)`,
        },
        null,
        changeHandler
      );
    case "min-width":
      return useMediaQueryRR(
        {
          query: `(${width2}: ${breakpoint1.value + pixel2}px)`,
        },
        null,
        changeHandler
      );
    case "none":
      const minWidth = `(min-width: ${breakpoint1.value + pixel2}px)`;
      const maxWidth = breakpoint2?.value
        ? `(max-width: ${breakpoint2.value - 1}px)`
        : null;
      const query = maxWidth ? `${minWidth} and ${maxWidth}` : minWidth;
      return useMediaQueryRR({ query: query }, null, changeHandler);
  }
};

export default useMediaQuery;
