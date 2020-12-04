import type { TSpacingPresetNames } from "@theme";
import { adjacentSiblingsMarginTop } from ".";

/**
 * Returns a specifing typographic spacing.
 * @param	preset	The spacing preset name.
 * @return			A style object.
 * @category Hooks
 * @example
 * useSpacing("Adjacent siblings margin top") =>
 * {
 * 	"& * + *": {
 * 	"marginTop": "var(--lem)"},
 * 	"& * + li, tr + tr": {
 * 		"marginTop": 0
 * 	}
 * }
 */
const useSpacing = (preset: TSpacingPresetNames): object | null => {
  switch (preset) {
    case "Adjacent siblings margin top":
      return adjacentSiblingsMarginTop;
  }
};

export default useSpacing;
