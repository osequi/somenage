import type { TTypographicGrid } from "../typographic-grid";
import { typographicGrid } from "../typographic-grid";

import type {
  TTypographicScale,
  TLinearScale,
  TModularScale,
} from "../typographic-scale";
import { typographicScale } from "../typographic-scale";

/**
 * Defines the typography type.
 *
 * This is an umbrella component. All settings related to typography are collected here.
 *
 * @category Theme
 * @example
 * grid: {fontSizes: [100, 100, 110, 120, 140], lineHeight: 1.25,},
 * scale: {name: "linear", settings: {},}
 */
export type TTypography = {
  /**
   * The settings for the typographic grid.
   */
  grid: TTypographicGrid;
  /**
   * The settings for the typographic scale.
   */
  scale: TTypographicScale;
};

/**
 * Defines the typography.
 *
 * This is an umbrella component. All settings related to typography are collected here.
 * @category Theme
 * @example
 * grid: {fontSizes: [100, 100, 110, 120, 140], lineHeight: 1.25,},
 * scale: {name: "linear", settings: {},}
 */
const typography: TTypography = {
  grid: typographicGrid,
  scale: typographicScale,
};

export default typography;
export type {
  TTypographicGrid,
  TTypographicScale,
  TLinearScale,
  TModularScale,
};
