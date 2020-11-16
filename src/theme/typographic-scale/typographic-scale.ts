import type { TLinearScaleSettings } from "../linear-scale";
import type { TModularScaleSettings } from "../modular-scale";
import { linearScaleSettings } from "../linear-scale";

/**
 * Defines the scale names.
 * @category Theme
 */
export type TTypographicScaleNames = "linear" | "modular";

/**
 * Defines the scale settings.
 * @category Theme
 */
export type TTypographicScaleSettings =
  | TLinearScaleSettings
  | TModularScaleSettings
  | {};

/**
 * Defines the typographic scale type.
 *
 * The various scale types / presets share the same structure.
 * This way they are pluggable into the theme.
 *
 * @category Theme
 * @example
 * name: "linear",
 * settings: {},
 * @example
 * name: 'modular',
 * settings: {base:[1], ratio: 1.33}
 */
export type TTypographicScale = {
  /**
   * The name of the scale. Identifies a scale preset.
   */
  name: TTypographicScaleNames;
  /**
   * The settings for the scale. Each preset has its own shape for settings.
   */
  settings?: TTypographicScaleSettings;
};

/**
 * Defines the typographic scale.
 *
 * The scale defines how typographic elements vary in size compared to the body text.
 * The scale comes from one of the presets: linear scale, modular scale.
 *
 * @category Theme
 * @example
 * name: "linear",
 * settings: {},
 * @example
 * name: 'modular',
 * settings: {base:[1], ratio: 1.33}
 */
const typographicScale: TTypographicScale = {
  name: "linear",
  settings: linearScaleSettings,
};

export default typographicScale;
