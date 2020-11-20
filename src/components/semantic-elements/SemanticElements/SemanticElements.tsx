import React, { createElement, ReactNode } from "react";

/**
 * Imports other types, components and hooks
 */
import type { THeadings } from "../Headings";
import { Headings, headingsDefaultProps } from "../Headings";

/**
 * Imports the business logic.
 */
import {
  requiredPropsAreSet,
  nonEmptyClassname,
} from "./SemanticElements.logic";

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
  as: TSemanticElement;
  /**
   * The heading of the element.
   * Used to insert (a mostly hidden_ heading tag like `<nav><h3>Menu</h3>...</nav>`.
   * It can be overwritten by the `title` and `display` props.
   */
  heading: THeadings;
  /**
   * The title of the element.
   * Overwrites the `{heading: children}` property.
   * Because it's easier to use `<Nav title="Menu" ..>` than `<Nav heading={{children: 'Menu'}} ..>`.
   */
  title: string;
  /**
   * Display the heading?
   * Overwrites the `{heading: display}` property.
   * It's easier to use `<Nav title="Menu" display={false} ..>` than `<Nav heading={{children: 'Menu', display: false}} ..>`
   */
  display: boolean;
  /**
   * The content to be displayed inside a semantic element.
   */
  children: ReactNode;
  /**
   * The className of the element.
   * Serves the technical purpose of style chaining.
   */
  className: string;
} & typeof semanticElementsDefaultProps;

/**
 * Defines the default props.
 */
const semanticElementsDefaultProps = {
  as: null,
  heading: headingsDefaultProps,
  title: null,
  display: false,
  children: null,
  className: null,
};

/**
 * Displays a semantic element.
 * This is a factory component.
 * It's better to use specific components like `<Article>` which has their props properly set up.
 */
const SemanticElements = (props: TSemanticElement) => {
  const { as, heading, title, children, display } = props;

  /**
   * Displays nothing if the mandatory props are not defined.
   */
  if (!requiredPropsAreSet(props)) return null;

  /**
   * Overwrites the `heading` props.
   */
  const heading2 = { ...heading, children: title, display: display };

  /**
   * Always displays a className.
   * When `className` is not specified it will become the tag name combined with the title.
   * Like `SectionDemo` for `<section title="Demo">`.
   */
  const className = nonEmptyClassname(props);

  /**
   * Prepares props for createElement
   */
  const props2 = { className: className };
  const children2 = (
    <>
      {<Headings {...heading2} />}
      {children}
    </>
  );

  return createElement(as, props2, children2);
};

SemanticElements.defaultProps = semanticElementsDefaultProps;

export default SemanticElements;
export { semanticElementsDefaultProps };
