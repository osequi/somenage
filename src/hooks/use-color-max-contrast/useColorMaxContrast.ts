import chroma from "chroma-js";
import { TColor } from "../../theme";
import { useColorContrast } from "../";

/**
 * Calculates the maximum contrast a color can have.
 *
 * The maximum contrast is the contrast to the farest end of the spectrum: either to white or to black.
 *
 * If the contrast is not enough (AA, AAA) the color can't be used for typography. It has to be changed.
 * No way a better contrast can be achieved to another color than to white or black.
 * @param  color A color object
 * @return       An array containing the color white or black, the contrast ratio as number, and a list fo standards the contrast mets.
 * @category Hooks
 * @example
 * useColorMaxContrast({ chroma: chroma("red") } => [{ chroma: chroma("black"), name: "Black" }, 5.25, true, true, false]
 */
const useMaximumContrast = (
  color: TColor
): [
  chroma: TColor,
  contrast: number,
  a: boolean,
  aa: boolean,
  aaa: boolean
] => {
  const white: TColor = { chroma: chroma("white"), name: "White" };
  const [contrastToWhite, aWhite, aaWhite, aaaWhite] = useColorContrast(
    color,
    white
  );

  const black: TColor = { chroma: chroma("black"), name: "Black" };
  const [contrastToBlack, aBlack, aaBlack, aaaBlack] = useColorContrast(
    color,
    black
  );

  return contrastToWhite < contrastToBlack
    ? [black, contrastToBlack, aBlack, aaBlack, aaaBlack]
    : [white, contrastToWhite, aWhite, aaWhite, aaaWhite];
};

export default useMaximumContrast;
