import type { TTypographicScale } from "../../theme";

/**
 * Returns a value from the linear scale.
 *
 * Used to set a different font size than the body text.
 *
 * @param  point       	The point on the scale.
 * @param  scale	 	The settings for the scale.
 * @return 				The value from the scale.
 * @category Hooks
 * @example
 * useLinearScale(0) => 1
 * useLinearScale(1) => 2
 */
const useLinearScale = (point: number, scale?: TTypographicScale): number => {
  return point + 1;
};

export default useLinearScale;
