import chroma from "chroma-js";
import { TColor } from "../../theme";

/**
 * Converts a string of numbers to an array.
 * @param	value	The string of numbers.
 * @return			The number of arrays.
 * @ignore
 * @example
 * '10.05, 4, 5' => [10.05, 4, 5]
 */
const stringToNumbers = (value: string): number[] => {
  const parts = value.split(",");
  return parts && parts.map((item) => Number(item));
};

/**
 * Creates a Chroma color.
 *
 * @param  color	The color to be created.
 * @return			The created Chroma color.
 * @category Hooks
 * @example
 * useChroma({ value: "0.2, 0.8, 0, 0", spaceName: "CMYK", chroma: null }) => A chroma color
 */
const useChroma = (color: TColor): chroma.Color | null => {
  if (!color || !color.value || !color.spaceName) return null;

  const { value, spaceName } = color;

  switch (spaceName) {
    case "Name":
    case "Hexadecimal":
      return chroma.valid(value) ? chroma(value) : null;
    case "Number":
      return chroma(parseInt(value));
    case "Temperature":
      return chroma.temperature(parseInt(value));
    case "RGB":
      return chroma(stringToNumbers(value));
    case "HSL":
      return chroma(stringToNumbers(value), "hsl");
    case "HSV":
      return chroma(stringToNumbers(value), "hsv");
    case "Lab":
      return chroma(stringToNumbers(value), "lab");
    case "LCH":
      return chroma(stringToNumbers(value), "lch");
    case "HCL":
      return chroma(stringToNumbers(value), "hcl");
    case "CMYK":
      return chroma(stringToNumbers(value), "cmyk");
    case "GL":
      return chroma(stringToNumbers(value), "gl");
  }
};

export default useChroma;
