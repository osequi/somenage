/**
 * Returns a value from the linear scale.
 * @ignore
 */
const getLinearScale = (value: number): number | null => {
  if (!value) return null;
  return value + 1;
};

/**
 * Returns value(s) from the linear scale.
 *
 * Used to set different font sizes than the body text.
 *
 * @param  points	 	The point(s) from the scale.
 * @return 				The value(s) from the scale.
 * @category Hooks
 * @example
 * useLinearScale(0) => 1
 * useLinearScale([1, 2]) => [2, 3]
 */
const useLinearScale = (
  points: number[] | number
): number[] | number | null => {
  if (!points) return null;

  return Array.isArray(points)
    ? points &&
        points.reduce((result, point) => {
          return [...result, getLinearScale(point)];
        }, [])
    : getLinearScale(points);
};

export default useLinearScale;
