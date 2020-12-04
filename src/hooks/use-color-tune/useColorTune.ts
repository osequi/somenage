import chroma from "chroma-js";
import { TColor } from "@theme";
import { useChromaValue, useColorContrast } from "../";

/**
 * Reduces / increases a color's luminance until meets a contrast > 7.
 * It's a recursive function.
 * @ignore
 * @param 	chroma1		The color to tune.
 * @param	color2		The color to tune for.
 * @param	luminance	The original luminance to tune.
 * @param	modifier	To tune up or down the luminace.
 * @param	index		The amount of tuning.
 * @return				The new color with contrast > 7. If such a color can't be found returns null.
 */
const tuneColor = (
  chroma1: chroma.Color,
  color2: TColor,
  luminance: number,
  modifier: number,
  index: number
): chroma.Color | null => {
  const newLuminance = luminance + 0.01 * modifier * index;
  if (newLuminance <= 0 || newLuminance >= 1) return null;

  const newChroma = chroma1.luminance(newLuminance);
  const newColor: TColor = { chroma: newChroma };
  const [contrast] = useColorContrast(newColor, color2);

  if (contrast >= 7) {
    return newChroma;
  } else {
    return tuneColor(chroma1, color2, luminance, modifier, index + 1);
  }
};

/**
 * Tunes a color to reach AAA contrast relative to another color.
 * @param	color1	The first color.
 * @param	color2 	The second color.
 * @return			The variant of the first color which has a >7 contrast ratio to the second color. Or null, if such color can't be found.
 * @category Hooks
 * @example <caption>Color found</caption>
 * useColorTune({ chroma: chroma("red") }, { chroma: chroma("black") }) => chroma([255, 94, 94, 1])
 * @example <caption>Color not found</caption>
 * useColorTune({ chroma: chroma("red") }, { chroma: chroma("white") }) => null
 */
const useColorTune = (color1: TColor, color2: TColor): chroma.Color | null => {
  if (!color1 || !color2) return null;

  const { chroma: chroma1 } = color1;

  const luminance = useChromaValue(chroma1.luminance(), 2);
  const lightness = useChromaValue(chroma1.get("hsl.l") * 100, 2);

  // Reduce or increase luminance?
  const modifier = lightness < 50 ? -1 : 1;

  return tuneColor(chroma1, color2, luminance, modifier, 1);
};

export default useColorTune;
