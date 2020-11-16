import type { TTypographicScale } from "../../theme";
import { modularScaleSettings } from "../../theme/modular-scale";
import { theme } from "../../theme";
import ms from "modularscale-js";

/**
 * Returns a value from the modular scale.
 *
 * Used to set a different font size than the body text.
 *
 * @param  point       		The point on the scale.
 * @param  scaleFromProps 	The settings for the scale.
 * @return 					The value from the scale.
 * @category Hooks
 * @example
 * useModularScale(0) => 1
 * useModularScale(1) => 1.33
 * useModularScale(1, {base:[1], ratio: 1.25}) => 1.25
 * @see https://github.com/modularscale/modularscale-js
 */
const useModularScale = (
  point: number,
  scaleFromProps?: TTypographicScale
): number => {
  const {
    typography: { scale: scaleFromTheme },
  } = theme;

  const scale2 = scaleFromProps || scaleFromTheme;
  const settings =
    scale2 && scale2.settings && scale2.settings.hasOwnProperty("base")
      ? scale2.settings
      : modularScaleSettings;

  return ms(point, settings);
};

export default useModularScale;
