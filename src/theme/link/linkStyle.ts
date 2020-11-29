import { CSSProperties } from "react";
import type { TColorPairNames } from "../";

/**
 * Defines the link style preset names.
 * Style presets define the styling for links.
 * A preset defines all styles for all states a link has.
 * @category Theme
 */
export type TLinkStylePresetNames = "default";

/**
 * Collects the link style preset names into an array.
 * @ignore
 */
const linkStylePresetNames = ["default"];

/**
 * Defines the link type preset names.
 * Link type decides which component will render the link.
 * Internal links are rendered by other components tahn external links.
 * @category Theme
 */
export type TLinkTypePresetNames = "external" | "internal";

/**
 * Defines the link state preset names.
 * Links are in one of these states.
 * @category Theme
 */
export type TLinkStatePresetNames =
  | "default"
  | "active"
  | "visited"
  | "disabled"
  | "hidden";

/**
 * Collects the link state preset names into an array.
 * @ignore
 */
const linkStatePresetNames = [
  "default",
  "active",
  "visited",
  "disabled",
  "hidden",
];

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
   * Every state a link has has a color definition.
   */
  colors?: TColorPairNames[];
  /**
   * The other than colors style settings for the preset.
   */
  styles?: CSSProperties[];
};

/**
 * Defines the default link style.
 */
const defaultLinkStyle: TLinkStyle = {
  preset: "default",
  colors: ["default", "inverted", "default"],
  styles: [
    {
      // default
      textDecoration: "underline",
    },
    {
      // active
      textDecoration: "line-through",
    },
    {
      // visited
      textDecorationColor: "red",
    },
    {
      // disabled
    },
    {
      // hidden
      display: "none",
    },
  ],
};

/**
 * Defines the available link styles.
 */
const linkStyles: TLinkStyle[] = [defaultLinkStyle];

export default linkStyles;
export { linkStylePresetNames, linkStatePresetNames };
