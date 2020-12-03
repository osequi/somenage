import { css } from "@emotion/css";
import { isNil } from "lodash";

/**
 * Tranforms a style object / function with Emotion's `css()` function.
 * @ignore
 * @see useStyles.md for TS warnings
 */
const transformStyle = (style, props) => {
  /**
   * Checks if this is a style object or function.
   */
  const isFunction = style?.hasOwnProperty("name");
  /**
   * Checks if this is a style object with a label.
   */
  const isObjectWithLabel = style?.hasOwnProperty("label");
  /**
   * Logs a warning message if a style object without a label is passed.
   */
  if (!isFunction && !isObjectWithLabel) {
    // NOTE: Remove in production.
    //console.log("A style object without label was received:", style);
  }
  /**
   * Returns value for style objects.
   */
  if (!isFunction) return css(style);

  /**
   * Returns value for style functions
   */
  if (isNil(props)) return css(style);
  if (isNil(style(props))) return css(style);
  if (JSON.stringify(style(props)).includes("undefined")) {
    console.log("Falsy props:", props);
    return null;
  }

  return css(style(props));
};

/**
 * Transforms CSS style functions, and, style objects with labels, into classNames for Emotion.
 *
 * // NOTE:  Neither the style function nor the style object should have a return type. When type set (to object, TemplateStringsArray) no styling will be returned.
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
