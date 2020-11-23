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
const stringToNumbers = (value: string): number[] | null => {
  if (!value) return null;
  const parts = value.split(",");
  return parts?.length > 1 ? parts.map((item) => Number(item)) : null;
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

  const i = parseInt(value);
  const n = stringToNumbers(value);

  switch (spaceName) {
    case "Name":
    case "Hexadecimal":
      return chroma.valid(value) ? chroma(value) : null;
    case "Number":
      return chroma.valid(i) ? chroma(i) : null;
    case "Temperature":
      return chroma.valid(i) ? chroma.temperature(i) : null;
    case "RGB":
      return chroma.valid(n) ? chroma(n) : null;
    case "HSL":
      return chroma.valid(n, "hsl") ? chroma(n, "hsl") : null;
    case "HSV":
      return chroma.valid(n, "hsv") ? chroma(n, "hsv") : null;
    case "Lab":
      return chroma.valid(n, "lab") ? chroma(n, "lab") : null;
    case "LCH":
      return chroma.valid(n, "lch") ? chroma(n, "lch") : null;
    case "HCL":
      return chroma.valid(n, "hcl") ? chroma(n, "hcl") : null;
    case "CMYK":
      return chroma.valid(n, "cmyk") ? chroma(n, "cmyk") : null;
    case "GL":
      return chroma.valid(n, "gl") ? chroma(n, "gl") : null;
  }
};

export default useChroma;
