/**
 * The list of standard color space names supported by chroma.js
 * @category Theme
 * @see https://gka.github.io/chroma.js/#chroma
 */
export type TStandardColorSpaceNames =
  | "RGB"
  | "HSL"
  | "HSV"
  | "Lab"
  | "LCH"
  | "HCL"
  | "CMYK";

/**
 * The list of all color space names supported by chroma.js
 * @category Theme
 * @see https://gka.github.io/chroma.js/#chroma
 */
export type TColorSpaceNames =
  | TStandardColorSpaceNames
  | "Name"
  | "Hexadecimal"
  | "Number"
  | "Temperature"
  | "GL";

/**
 * Defines the color space type.
 * @category Theme
 * @example
 * name: "Name",
 * description: "Named colors from the W3CX11 specification.",
 * example: "red",
 * spaceName: null,
 * @example
 * name: "RGB",
 * description: "An RGB triplet.",
 * example: "255, 0, 0",
 * spaceName: "RGB",
 */
export type TColorSpace = {
  /**
   * The name of the color space. See `TColorSpaceNames`.
   */
  name: TColorSpaceNames;
  /**
   * The description of the color space.
   */
  description?: string;
  /**
   * If the color space is one of the `TStandardColorSpaceNames`.
   */
  spaceName?: TStandardColorSpaceNames;
  /**
   * An example showcasing the syntax of the color definition in this space.
   */
  example?: string;
};

/**
 * Defines the color spaces.
 *
 * Color spaces are used to define and manipulate colors.
 *
 * @category Theme
 * @example
 * name: "Name",
 * description: "Named colors from the W3CX11 specification.",
 * example: "red",
 * spaceName: null,
 * @example
 * name: "RGB",
 * description: "An RGB triplet.",
 * example: "255, 0, 0",
 * spaceName: "RGB",
 */
const colorSpaces: TColorSpace[] = [
  {
    name: "Name",
    description: "Named colors from the W3CX11 specification.",
    example: "red",
    spaceName: null,
  },
  {
    name: "Hexadecimal",
    description: "The standard CSS color notation.",
    example: "#ff0000",
    spaceName: null,
  },
  {
    name: "Number",
    description: "A value between 0 - 16777215.",
    example: "1",
    spaceName: null,
  },
  {
    name: "RGB",
    description: "An RGB triplet.",
    example: "255, 0, 0",
    spaceName: "RGB",
  },
  {
    name: "HSL",
    description: "An HSL triplet.",
    example: "330, 1, 0.6",
    spaceName: "HSL",
  },
  {
    name: "HSV",
    description: "An HSV triplet.",
    example: "38.82, 1, 1",
    spaceName: "HSV",
  },
  {
    name: "Lab",
    description: "A Lab triplet.",
    example: "74.94, 23.93, 78.95",
    spaceName: "Lab",
  },
  {
    name: "LCH",
    description: "An LCH triplet.",
    example: "79.21, 25.94, 235.11",
    spaceName: "LCH",
  },
  {
    name: "HCL",
    description: "An HCL triplet.",
    example: "235.11, 25.94, 79.21",
    spaceName: "HCL",
  },
  {
    name: "CMYK",
    description: "A CMYK quadruplet.",
    example: "1, 0.5, 0, 0.2",
    spaceName: "CMYK",
  },
  {
    name: "GL",
    description: "An RGB triplet with GL notation.",
    example: "0.6, 0, 0.8",
    spaceName: "RGB",
  },
  {
    name: "Temperature",
    description:
      "A single number in Kelvin (K) units. From around 200 to 30,000",
    example: "1000",
    spaceName: null,
  },
];

export default colorSpaces;
