import { theme } from "../../theme";
import { useBreakpoint } from "../";

const useResponsiveGridColumns = (
  columns: number | number[]
): object | null => {
  const { breakpoints } = theme;
  if (!breakpoints) return null;

  const responsiveColumns = Array.isArray(columns) ? columns : [columns];

  let queries = [];

  responsiveColumns &&
    responsiveColumns.map((item, index) => {
      const bp = breakpoints[index];
      const query = useBreakpoint(bp.name);
      queries[`${query}`] = {
        gridTemplateColumns: `repeat(${item}, 1fr)`,
      };
    });

  return queries;
};

export default useResponsiveGridColumns;
