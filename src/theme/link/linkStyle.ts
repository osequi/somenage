import type { TColorPairNames } from "../";

/**
 * Defines the link style preset names.
 * Presets define full styling for links.
 * Preset can be something like `default`, `underlined`, `naked` etc.
 * @category Theme
 */
export type TLinkStylePresetNames = "default";

/**
 * Collects the link style preset names into an array.
 * @ignore
 */
const linkStylePresetNames = ["default"];

/**
 * Defines the link colors type.
 * Link colors are set via `useColors`. These are the definitions for `useColors`.
 * @category Theme
 */
export type TLinkColors = {
  /**
   * The color of the link in default state.
   */
  default?: TColorPairNames;
  /**
   * The color of the link for hover, active, focus states.
   */
  active?: TColorPairNames;
  /**
   * The color of the link for the visited state.
   */
  visited?: TColorPairNames;
};

/**
 * Defines the link style props type.
 * Other link styling than color are specified here.
 * @category Theme
 */
export type TLinkStyleProps = {
  /**
   * The style of the link in default state.
   */
  default?: object;
  /**
   * The style of the link for hover, active, focus states.
   */
  active?: object;
  /**
   * The style of the link for the visited state.
   * It can have a restricted set of CSS rules.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/:visited
   */
  visited?: object;
};

/**
 * Defines the link style type.
 * @category Theme
 */
export type TLinkStyle = {
  /**
   * Which preset to use.
   */
  preset?: TLinkStylePresetNames;
  /**
   * The colors for the preset.
   */
  colors?: TLinkColors;
  /**
   * The other than colors style settings for the preset.
   */
  styleProps?: TLinkStyleProps;
};

/**
 * Defines the default link style.
 */
const defaultLinkStyle: TLinkStyle = {
  preset: "default",
  colors: {
    default: "default",
    active: "inverted",
    visited: "default", // shaded-inverted
  },
  styleProps: {
    default: {
      textDecoration: "underline",
    },
    active: {
      textDecoration: "line-through",
    },
    visited: {
      textDecorationColor: "red",
    },
  },
};

/**
 * Defines the available link styles.
 */
const linkStyles: TLinkStyle[] = [defaultLinkStyle];

export default linkStyles;
export { linkStylePresetNames };
