import { theme } from "../../theme";
import { useBreakpoint } from "../";

/**
 * Returns responsive `gridTemplateColumns` CSS definitions.
 * @param  columns The number of columns.
 * @return         Zero, one or more `gridTemplateColumns` definitions.
 * @category Hooks
 * @example
 * useResponsiveGridColumns(1) => {
 * 	"@media(min-width: 320px)": { gridTemplateColumns: "repeat(1, 1fr)" },
 * }
 * @example
 * useResponsiveGridColumns([1, 2]) => {
 * {
 * 	"@media(min-width: 320px)": { gridTemplateColumns: "repeat(1, 1fr)" },
 * },
 * {
 * "@media(min-width: 768px)": { gridTemplateColumns: "repeat(2, 1fr)" }
 * }
 * }
 */
const useResponsiveGridColumns = (columns: number | number[]): {} | null => {
  if (!columns) return null;

  const breakpoints = theme?.breakpoints;
  if (!breakpoints) return null;

  const responsiveColumns = Array.isArray(columns) ? columns : [columns];

  let queries = {};

  responsiveColumns &&
    responsiveColumns.map((item, index) => {
      const breakpoint = breakpoints[index];
      if (!breakpoint || !breakpoint.name) return null;

      const query = useBreakpoint(breakpoint.name);
      if (!query) return null;

      queries[`${query}`] = {
        gridTemplateColumns: `repeat(${item}, 1fr)`,
      };
    });

  return queries;
};

export default useResponsiveGridColumns;
