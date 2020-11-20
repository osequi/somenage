import React, { createElement, ReactNode } from "react";

/**
 * Defines the headings type.
 */
export type THeadings = {
  /**
   * The level of the element.
   */
  level: number;
  /**
   * Display the element?
   */
  display?: boolean;
  /**
   * The content to be displayed, like the heading title.
   */
  children: ReactNode;
} & typeof headingsDefaultProps;

/**
 * Defines the headings default props.
 */
const headingsDefaultProps = {
  level: 3,
  display: true,
  children: null,
};

/**
 * Displays the `<h1>` ... `<h6>` tags as semantic elements.
 * This is a factory component.
 * It's better to use specific components instead like `<H1>` which has their props properly set up.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_SemanticElements
 */

const Headings = (props: THeadings) => {
  const { level, display, children } = props;

  /**
   * Displays nothing if there is no `children` prop defined
   */
  if (!children) return null;

  /**
   * Hides the element when display is `false`
   * `<h3 hidden>` can't be used because it can be overwritten in css.
   * @see https://css-tricks.com/the-hidden-attribute-is-visibly-weak/
   * In the parent this `display: none` property cannot be overwritten.
   */
  const style = display ? null : { display: "none" };

  /**
   * Converts level to string.
   * Example:`1` => `h1`
   */
  const levelAsString = `h${level}`;

  /**
   * Prepares props for createElement
   */
  const props2 = { style: style };

  return createElement(levelAsString, props2, children);
};

Headings.defaultProps = headingsDefaultProps;

export default Headings;
export { headingsDefaultProps };
