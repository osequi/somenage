import chroma from "chroma-js";
import { lowerCase } from "lodash";
import { TColor } from "../../theme";

/**
 * Creates a Chroma color using the `chroma({ h:120, s:1, l:0.75});` notation.
 *
 * @param  color	The color to be created.
 * @return			The created Chroma color.
 * @see https://gka.github.io/chroma.js/#chroma
 */
const createColorFromTriplets = (color: TColor): chroma.Color | null => {
  if (!color || !color.value || !color.spaceName) return null;

  const { value, spaceName } = color;

  /**
   * '255, 255, 1' => '255,255,1'
   */
  const removedWhiteSpace = value.split(" ").join("");
  const parts = removedWhiteSpace.split(",");
  if (parts.length !== spaceName.length) return null;

  /**
   * (255, 255, 1, 'RGB') => {r:255, g:255, b: 1}
   */
  let params = [];
  parts.map((item, index) => {
    params[lowerCase(spaceName[index])] = item;
  });

  return chroma({ ...params });
};

/**
 * Creates a Chroma color.
 *
 * @param  color	The color to be created.
 * @return			The created Chroma color.
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
    default:
      return createColorFromTriplets(color);
  }
};

export default useChroma;
