import { ReactNode, HTMLProps, createElement } from "react";
import { cx } from "@emotion/css";
import { startCase, isNil } from "lodash";

/**
 * Imports other types, components ans hooks.
 */
import {
  useStyles,
  useFont,
  useMaxWidth,
  useScale,
  useSpacing,
  useHeadings,
} from "../../../hooks";

/**
 * Defines the text variant type.
 * @category Components
 */
export type TTextVariants = "default" | "body" | "longform" | "title";

/**
 * Defines the text type.
 * @category Components
 * @example
 * variant: "default",
 * as: "div",
 * children: null,
 */
export type TText = {
  /**
   * The style of the text.
   * It's a preset. One of `TTextVariants`.
   */
  variant: TTextVariants;
  /**
   * The container where the text is rendered.
   * Preferably a `SemanticElement`.
   */
  as?: any | string;
  /**
   * The props of the container where the text is rendered.
   */
  asProps: object;
  /**
   * The content to be rendered.
   */
  children: ReactNode;
  /**
   * The className of the element.
   * Serves the technical purpose of style chaining.
   */
  className: string;
} & typeof textDefaultProps;

/**
 * Defines the text default props.
 * @category Components
 * @example
 * variant: "default",
 * as: "div",
 * children: null,
 */
const textDefaultProps = {
  variant: "default",
  as: "div",
  asProps: null,
  children: null,
  className: null,
};

/**
 * Defines the styles.
 * @ignore
 */
const defaultText = (props: {
  nimbusRegular: object;
  defaultScale: object;
  sameSizeHeadings: object;
  adjacentSiblingsMarginTop: object;
}): object => ({
  ...props.nimbusRegular,
  ...props.defaultScale,
  ...props.sameSizeHeadings,
  ...props.adjacentSiblingsMarginTop,
});

/**
 * Displays a styled text.
 *
 * Instead of styling text freely, reusable text styles are defined here, and later re-used in other components.
 * Like `default`, `body`, `longform` etc.
 *
 * @category Components
 * @component
 * @example
 * return <Text variant='default'>This is a default text</Text>
 */
const Text = (props: TText) => {
  const { variant, as, asProps, children } = props;

  /**
   * Displays nothing if children is not defined.
   */
  if (isNil(children)) return null;

  /**
   * Prepares the data.
   * @ignore
   */
  const nimbusRegular = useFont("Nimbus Sans Regular");
  const defaultScale = useScale(0);
  const sameSizeHeadings = useHeadings({
    preset: "sameSize",
  });
  const adjacentSiblingsMarginTop = useSpacing("Adjacent siblings margin top");

  /**
   * Loads styles.
   * @ignore
   */
  const defaultTextKlass = useStyles(defaultText, {
    nimbusRegular: nimbusRegular,
    defaultScale: defaultScale,
    sameSizeHeadings: sameSizeHeadings,
    adjacentSiblingsMarginTop: adjacentSiblingsMarginTop,
  });

  /**
   * Matches styles with the variants.
   * @ignore
   */
  let klass = null;
  switch (variant) {
    case "default":
      klass = defaultTextKlass;
  }

  /**
   * Prepares the props for the new element.
   */
  const propsForCreateElement: HTMLProps<any> = {
    className: cx(klass, `Text${startCase(variant)}`),
    ...asProps,
  };

  return createElement(as, propsForCreateElement, children);
};

Text.defaultProps = textDefaultProps;

export default Text;
export { textDefaultProps };
