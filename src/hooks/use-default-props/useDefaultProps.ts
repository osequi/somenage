import merge from "deepmerge";

/**
 * The function defining how arrays are merged.
 * @ignore
 * @see https://www.npmjs.com/package/deepmerge
 */
const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray;

/**
 * Deep merges props with default props.
 * @param  props		The props.
 * @param  defaultProps	The default props.
 * @return              Props merged with default props.
 * @category Hooks
 * @example
 * useDefaultProps({points: [1, 2, 3, 4, 5, 6, 7]}, {points: [1]}) => {points: [1, 2, 3, 4, 5, 6, 7]}
 * @see https://www.npmjs.com/package/deepmerge
 */
const useDefaultProps = (props, defaultProps) => {
  if (!props && !defaultProps) return null;

  return defaultProps && props
    ? merge(defaultProps, props, { arrayMerge: overwriteMerge })
    : defaultProps
    ? defaultProps
    : props;
};

export default useDefaultProps;
