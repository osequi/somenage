import type { TTypographicGrid } from "@theme";
import { theme } from "@theme";
import { useDefaultProps } from "../";

/**
 * Calculates the typographic grid cell size (`lem`, aka. line height in `em`).
 *
 * This unit used across the theme for spacing assures all elements are fit to the grid.
 *
 * As a global var `--lem` it is added to the `<body>`.
 * Then setting a margin or padding should be always done using `--lem`.
 *
 * @param  typographicGrid The typographic grid settings. It's optional. It's better to be loaded from the theme than passed as args.
 * @return The cell size (in em)
 *
 * @category Hooks
 *
 * @example
 * useLem({fontSizes: [100], lineHeight: 1.25}) => (100 * 1.25) / 100 = 1.25
 *
 * @example
 * useLem({fontSizes: [110], lineHeight: 1.25}) => (110 * 1.25) / 100 = 1.375
 */
const useLem = (typographicGrid?: TTypographicGrid): number | null => {
  const grid = theme?.typography?.grid;

  const grid2: TTypographicGrid = useDefaultProps(typographicGrid, grid);
  if (!grid2) return null;

  const { fontSizes, lineHeight } = grid2;
  const fontSize = fontSizes[0] ? fontSizes[0] : null;

  return (fontSize * lineHeight) / 100;
};

export default useLem;
