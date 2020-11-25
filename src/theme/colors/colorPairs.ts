import type { TColorNamesForThePalette } from "../";

/**
 * Defines the color pair names type.
 */
export type TColorPairNames =
  | "default"
  | "text-on-background"
  | "inverted"
  | "background-on-text";

/**
 * Defines the color pair type.
 */
export type TColorPair = {
  name?: TColorPairNames;
  text?: TColorNamesForThePalette;
  background?: TColorNamesForThePalette;
};

/**
 * Defines the default color pair.
 */
const defaultColorPair: TColorPair = {
  name: "default" || "text-on-background",
  text: "Text",
  background: "Background",
};

/**
 * Defines the inverted color pair.
 */
const invertedColorPair: TColorPair = {
  name: "inverted" || "background-on-text",
  text: "Background",
  background: "Text",
};

/**
 * Defines the available color pairs.
 */
const colorPairs: TColorPair[] = [defaultColorPair, invertedColorPair];

export default colorPairs;
