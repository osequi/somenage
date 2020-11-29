import type { TBreakpointNames, TBreakpoint } from "@theme";
import { useMediaQuery as useMediaQueryRR } from "react-responsive";
import { theme } from "../../theme";

/**
 * Tells if the current viewport satisfies a breakpoint.
 * @param	breakpoint	The breakpoint name.
 * @return				If the viewport equals the breakpoint.
 * @category Hooks
 * @example
 * useMediaQuery('mobile') => true, if breakpoints['mobile'].value <= viewport size < breakpoints['tablet'].value
 */
const useMediaQuery = (breakpoint?: TBreakpointNames): boolean | null => {
  if (!breakpoint) return null;

  const breakpoints = theme?.breakpoints;
  if (!breakpoints) return null;

  const breakpoint1Index = breakpoints.findIndex(
    (item: TBreakpoint) => item.name === breakpoint
  );
  if (breakpoint1Index === -1) return null;

  const breakpoint1 = breakpoints[breakpoint1Index];
  if (!breakpoint1.value) return null;

  const breakpoint2 =
    breakpoint1Index + 1 <= breakpoints.length
      ? breakpoints[breakpoint1Index + 1]
      : null;

  const minWidth = `(min-width: ${breakpoint1.value}px)`;
  const maxWidth = breakpoint2?.value
    ? `(max-width: ${breakpoint2.value - 1}px)`
    : null;

  const query = maxWidth ? `${minWidth} and ${maxWidth}` : minWidth;

  return useMediaQueryRR({ query: query });
};

export default useMediaQuery;
