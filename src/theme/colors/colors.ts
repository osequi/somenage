import chroma from "chroma-js";
import { TColorSpaceNames } from "./colorSpaces";

/**
 * The list of color names required to form a palette.
 * @category Theme
 */
export type TColorNamesForThePalette =
  | "Background"
  | "Text"
  | "Highlight"
  | "Shade";

/**
 * Defines the color type.
 * @category Theme
 * @example
 * name: "White",
 * for: "Background",
 * description: "The background color.",
 * value: "white",
 * spaceName: "Name",
 * chroma: chroma("white"),
 */
export type TColor = {
  /**
   * The name of the color.
   */
  name?: string;
  /**
   * Which entry from the palette this color id for.
   */
  for?: TColorNamesForThePalette;
  /**
   * A short description of the usage of the color.
   */
  description?: string;
  /**
   * The value of the color in a color space.
   */
  value?: string | null;
  /**
   * The name of the color space where this color comes from.
   */
  spaceName?: TColorSpaceNames;
  /**
   * The `chroma-js` object for the color.
   */
  chroma: chroma.Color | null;
};

/**
 * Defines the colors of the palette.
 * @category Theme
 * @example
 * name: "White",
 * for: "Background",
 * description: "The background color.",
 * value: "white",
 * spaceName: "Name",
 * chroma: chroma("white"),
 */
const colors: TColor[] = [
  {
    name: "White",
    for: "Background",
    description: "The background color.",
    value: "white",
    spaceName: "Name",
    chroma: chroma("white"),
  },
  {
    name: "Black",
    for: "Text",
    description: "The text color.",
    value: "black",
    spaceName: "Name",
    chroma: chroma("black"),
  },
  {
    name: "Undefined",
    for: "Highlight",
    description:
      "The highlight color. Used for links, buttons, call to action elements.",
    value: null,
    spaceName: "Name",
    chroma: null,
  },
  {
    name: "Undefined",
    for: "Shade",
    description: "The shade color. Used for secondary backgrounds.",
    value: null,
    spaceName: "Name",
    chroma: null,
  },
];

export default colors;
