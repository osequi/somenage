import React from "react";

/**
 * Imports other types, components and hooks.
 */
import type { TSemanticElement } from "../";
import { SemanticElement, semanticElementDefaultProps } from "../";

/**
 * Defines the article default props.
 * @category Components
 * @example
 * ...semanticElementDefaultProps,
 * as: "article",
 * heading: true,
 */
const articleDefaultProps = {
  ...semanticElementDefaultProps,
  as: "article",
  displayTitle: true,
};

/**
 * Displays an `<article>` element.
 * @category Components
 * @component
 * @example
 * return (<Article title="Article title"/>)
 */
const Article = (props: TSemanticElement) => {
  return <SemanticElement {...props} />;
};

Article.defaultProps = articleDefaultProps;

export default Article;
export { articleDefaultProps };
