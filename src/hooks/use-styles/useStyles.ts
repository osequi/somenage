import { css } from "@emotion/css";

/**
 * Tranforms a style object / function with Emotion's `css()` function.
 * @ignore
 * @see useStyles.md for TS warnings
 */
const transformStyle = (style, props: {}) => {
  /**
   * Checks if this is a style object or function.
   */
  const isFunction = style && style.name;
  /**
   * Checks if this is a style object with a label.
   */
  const isObjectWithLabel = style && style.label;
  /**
   * Logs a warning message if a style object without a label is passed.
   */
  if (!isFunction && !isObjectWithLabel) {
    // NOTE: Remove in production.
    // console.log("A style object without label was received:", style);
  }
  /**
   * Returns value both for style functions and objects.
   */
  return isFunction ? css(style(props)) : css(style);
};

/**
 * Transforms CSS style functions, and, style objects with labels, into classNames for Emotion.
 *
 * Note: Neither the style function nor the style object should have a return type. When type set (to object, TemplateStringsArray) no styling will be returned.
 *
 * @category Hooks
 * @example
 * const styleFunction = (props: ...) => { return {...}}
 * const klass = useStyles(styleFunction, props)
 * @example
 * const klass2 = {label: 'klass2', ...}
 * const [klass1, klass2] = useStyles([styleFunction, styleObject], props)
 */
const useStyles = (styles?: [] | {}, props?: {}) => {
  const styles2 = styles ? styles : {};
  const props2 = props ? props : {};

  return Array.isArray(styles2)
    ? styles2 &&
        styles2.reduce((result, item) => {
          return [...result, transformStyle(item, props2)];
        }, [])
    : transformStyle(styles2, props2);
};

export default useStyles;
