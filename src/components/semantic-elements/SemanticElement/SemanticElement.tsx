import React, { createElement, ReactNode } from "react";

/**
 * Imports the business logic.
 */
import {
  requiredPropsAreSet,
  nonEmptyClassname,
} from "./SemanticElement.logic";

/**
 * Defines the available semantic elements.
 */
export type TSemanticElementList =
  | "article"
  | "aside"
  | "footer"
  | "header"
  | "heading"
  | "nav"
  | "section";

/**
 * Defines the semantic element type.
 */
export type TSemanticElement = {
  /**
   * The type of the element.
   * @example: `nav`, 'article'
   */
  as: TSemanticElementList;
  /**
   * The title of the element.
   * If set a heading will be inserted.
   * @example <SemanticElement as='nav' title='Menu' /> => <nav><h3>Menu</h3>...</nav>
   */
  title: string;
  /**
   * Display the heading?
   */
  heading?: boolean;
  /**
   * The content to be displayed inside a semantic element.
   */
  children: ReactNode;
  /**
   * The className of the element.
   * Serves the technical purpose of style chaining.
   */
  className: string;
} & typeof semanticElementDefaultProps;

/**
 * Defines the default props.
 */
const semanticElementDefaultProps = {
  as: "div",
  title: null,
  heading: false,
  children: null,
  className: null,
};

/**
 * Displays a semantic element.
 * This is a factory component.
 * It's better to use specific components like `<Article>` which has their props properly set up.
 */
const SemanticElement = (props: TSemanticElement) => {
  const { as, title, heading, children } = props;

  /**
   * Displays nothing if the mandatory props are not defined.
   */
  if (!requiredPropsAreSet(props)) return null;

  /**
   * Always displays a className.
   * When `className` is not specified it will become the tag name combined with the title.
   * Like `SectionDemo` for `<section title="Demo">`.
   */
  const className = nonEmptyClassname(props);

  /**
   * Prepares the heading
   */
  const headingStyle = heading ? null : { display: "none" };
  const headingTitle = title ? title : className;
  const headingElement = <h3 style={headingStyle}>{headingTitle}</h3>;

  /**
   * Prepares props for createElement
   */
  const props2 = { className: className, "data-testid": className };
  const children2 = (
    <>
      {headingElement}
      {children}
    </>
  );

  return createElement(as, props2, children2);
};

SemanticElement.defaultProps = semanticElementDefaultProps;

export default SemanticElement;
export { semanticElementDefaultProps };
