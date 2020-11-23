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
 * @category Components
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
 * @category Components
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
  /**
   * The test id of the element.
   * It comes from the parent, usually.
   */
  testId?: string;
} & typeof semanticElementDefaultProps;

/**
 * Defines the semantci element default props.
 * @category Components
 * @example
 * as: "div",
 * title: null,
 * heading: false,
 * children: null,
 * className: null,
 * testId: null,
 */
const semanticElementDefaultProps = {
  as: "div",
  title: null,
  heading: false,
  children: null,
  className: null,
  testId: null,
};

/**
 * Displays a semantic element.
 *
 * This is a factory component.
 * It's better to use specific components like `<Article>` which has their props properly set up.
 *
 * @category Components
 * @component
 * @example
 * return (<SemanticElement as="nav" title="Menu">menu items</SemanticElement>)
 */
const SemanticElement = (props: TSemanticElement) => {
  const { as, title, heading, children, testId } = props;

  /**
   * Displays nothing if the mandatory props are not defined.
   */
  if (!requiredPropsAreSet(props)) return null;

  /**
   * Always displays a className.
   *
   * When `className` is not specified it will become the tag name combined with the title.
   * Like `SectionDemo` for `<section title="Demo">`.
   */
  const className = nonEmptyClassname(props);

  /**
   * Prepares the heading.
   * NOTE: Perhaps this should be refactored to use `SemanticHeading`
   */
  const headingStyle = heading ? null : { display: "none" };
  const headingTitle = title ? title : className;
  const headingElement = <h3 style={headingStyle}>{headingTitle}</h3>;

  /**
   * Prepares props for createElement.
   */
  const propsForCreateElement = {
    className: className,
    "data-testid": testId,
  };

  const childrenForCreateElement = (
    <>
      {headingElement}
      {children}
    </>
  );

  return createElement(as, propsForCreateElement, childrenForCreateElement);
};

SemanticElement.defaultProps = semanticElementDefaultProps;

export default SemanticElement;
export { semanticElementDefaultProps };
