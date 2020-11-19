import { css, Interpolation } from "emotion";

/**
 * Transforms CSS style functions, and, style objects with labels, into classNames for Emotion.
 * @example: `const [styleFunctionKlass, styleObjectWithLabelKlass ] = useStyles([styleFunction, styleObjectWithLabel], props)`
 */
const useStyles = (
  styles: TemplateStringsArray[] = [],
  ...props: Array<Interpolation>[]
) => {
  return Array.isArray(styles)
    ? styles &&
        styles.reduce((result, item) => {
          return [...result, css(item, props)];
        }, [])
    : css(styles, props);
};

export default useStyles;
