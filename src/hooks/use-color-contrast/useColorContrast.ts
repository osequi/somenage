import chroma from "chroma-js";
import { useChromaValue } from "../";
import { TColor } from "../../theme";

/**
 * Calculates the contrast of two colors using chroma.js.
 *
 * The contrast between the colors determine if they can be paired together, and if yes then in what conditions.
 *
 * WCAG 2.0 level AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.
 * WCAG 2.1 requires a contrast ratio of at least 3:1 for graphics and user interface components (such as form input borders).
 * WCAG Level AAA requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text.\\
 *
 * Large text is defined as 14 point (typically 18.66px) and bold or larger, or 18 point (typically 24px) or larger.
 *
 * @param  color1 	The first color.
 * @param  color2 	The second color.
 * @return          An array containing the color contrast ratio as number, and a list of standards the contrast mets.
 * @category Hooks
 * @example
 * useColorContrast({ chroma: chroma("white") }, { chroma: chroma("black") }) => [21, true, true, true]
 * @see https://webaim.org/resources/contrastchecker/
 */
const useColorContrast = (
  color1: TColor,
  color2: TColor
): [contrast: number, a: boolean, aa: boolean, aaa: boolean] | null => {
  if (!color1?.chroma || !color2?.chroma) return null;

  const { chroma: chroma1 } = color1;
  const { chroma: chroma2 } = color2;

  const contrast = useChromaValue(chroma.contrast(chroma1, chroma2), 2);
  const a = contrast > 3;
  const aa = contrast > 4.5;
  const aaa = contrast > 7;

  return [contrast, a, aa, aaa];
};

export default useColorContrast;
