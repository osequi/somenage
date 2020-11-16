import type { TModularScale } from "../../theme";
import { modularScale } from "../../theme/modular-scale";
import { theme } from "../../theme";
import ms from "modularscale-js";

/**
 * Returns a value from the modular scale.
 *
 * Used to set a different font size than the body text.
 *
 * @param  value       	The point on the scale.
 * @param  modularScale The settings for the scale.
 * @return 				The value from the scale.
 * @category Hooks
 * @example
 * useModularScale(0) => 1
 * useModularScale(1) => 1.33
 * useModularScale(1, {base:[1], ratio: 1.25}) => 1.25
 * @see https://github.com/modularscale/modularscale-js
 */
const useModularScale = (
  value: number,
  modularScaleFromProps?: TModularScale
): number => {
  const {
    typography: { scale },
  } = theme;

  const scale2 = modularScaleFromProps || scale;
  const scale3 =
    scale2 && scale2.settings && scale2.settings.hasOwnProperty("base")
      ? modularScale
      : scale2;
  const { settings } = scale3;

  return ms(value, settings);
};

export default useModularScale;
