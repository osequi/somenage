import type { TLinearScale } from "../../theme";

/**
 * Returns a value from the linear scale.
 *
 * Used to set a different font size than the body text.
 *
 * @param  value       	The point on the scale.
 * @param  linearScale 	The settings for the scale.
 * @return 				The value from the scale.
 * @category Hooks
 * @example
 * useLinearScale(0) => 1
 * useLinearScale(1) => 2
 */
const useLinearScale = (value: number, linearScale?: TLinearScale): number => {
  return value + 1;
};

export default useLinearScale;
