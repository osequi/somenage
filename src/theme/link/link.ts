import type { TColorPairNames } from "../";

/**
 * Defines the link preset names.
 * @category Theme
 */
export type TLinkPresetNames = "default";

/**
 * Collects the link preset names into an array.
 * @ignore
 */
const linkPresetNames = ["default"];

/**
 * Defines the link colors type.
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
 * Defines the link settings type.
 */
export type TLinkSettings = {
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
   */
  visited?: object;
};

/**
 * Defines the link type.
 * @category Theme
 */
export type TLink = {
  /**
   * Which preset to use.
   */
  preset?: TLinkPresetNames;
  /**
   * The colors for the preset.
   */
  colors?: TLinkColors;
  /**
   * The settings for the preset.
   */
  settings?: TLinkSettings;
};

/**
 * Defines the default link style.
 */
const defaultLink: TLink = {
  preset: "default",
  colors: {
    default: "default",
    active: "inverted",
    visited: "default",
  },
  settings: {
    default: {
      textDecoration: "underline",
    },
    active: {
      textDecoration: "line-through",
    },
    visited: {},
  },
};

/**
 * Defines the available link styles.
 */
const links: TLink[] = [defaultLink];

export default links;
export { linkPresetNames };
