import { createElement, ReactNode } from "react";
import { isNil } from "lodash";

/**
 * Defines the semantic heading type.
 * @category Components
 */
export type TSemanticHeading = {
  /**
   * The level of the heading.
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * Display the heading?
   */
  display?: boolean;
  /**
   * The content to be displayed inside the heading.
   */
  children?: ReactNode;
  /**
   * The className of the element.
   * Serves the technical purpose of style chaining.
   */
  className?: string;
  /**
   * The test id of the element.
   * It come from the parent, usually.
   */
  testId?: string;
} & typeof semanticHeadingDefaultProps;

/**
 * Defines the semantic heading default props.
 * @category Components
 * @example
 * level: 3,
 * display: true,
 * children: null,
 * className: null,
 * testId: null,
 */
const semanticHeadingDefaultProps = {
  level: 3,
  display: true,
  children: null,
  className: null,
  testId: null,
};

/**
 * Displays a semantic heading.
 *
 * This is a factory component.
 * It's better to use specific components like `<H1>`.
 *
 * @category Components
 * @component
 * @example
 * return (<SemanticHeading level={1}>Heading level 1</SemanticHeading>)
 */
const SemanticHeading = (props: TSemanticHeading) => {
  const { level, display, children, className, testId } = props;

  /**
   * Displays nothing if the mandatory props are not defined.
   */
  if (isNil(children)) return null;

  /**
   * Always displays a className.
   */
  const classNameAlwaysSet = className ? className : `SemanticHeading-${level}`;

  /**
   * Converts level to string.
   * @example
   * `1` => `h1`
   */
  const levelAsString = `h${level}`;

  /**
   * Prepares the style.
   */
  const style = display ? null : { display: "none" };

  /**
   * Prepares props for createElement.
   */
  const propsForCreateElement = {
    className: classNameAlwaysSet,
    style: style,
    "data-testid": testId,
  };

  return createElement(levelAsString, propsForCreateElement, children);
};

SemanticHeading.defaultProps = semanticHeadingDefaultProps;

export default SemanticHeading;
export { semanticHeadingDefaultProps };
