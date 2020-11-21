import React from "react";

/**
 * Imports other types, components and hooks
 */
import type { TSemanticElement } from "../";
import { SemanticElement, semanticElementDefaultProps } from "../";

/**
 * Defines the default props
 */
const articleDefaultProps: TSemanticElement = {
  ...semanticElementDefaultProps,
  as: "article",
  heading: true,
};

/**
 * Displays a `<article>` element.
 */
const Article = (props: TSemanticElement) => {
  return <SemanticElement {...props} />;
};

Article.defaultProps = articleDefaultProps;

export default Article;
export { articleDefaultProps };
