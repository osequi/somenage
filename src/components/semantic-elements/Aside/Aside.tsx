import React from "react";

/**
 * Imports other types, components and hooks
 */
import type { TSemanticElement } from "../";
import { SemanticElement, semanticElementDefaultProps } from "../";

/**
 * Defines the default props
 */
const asideDefaultProps: TSemanticElement = {
  ...semanticElementDefaultProps,
  as: "aside",
};

/**
 * Displays a `<aside>` element.
 */
const Aside = (props: TSemanticElement) => {
  return <SemanticElement {...props} />;
};

Aside.defaultProps = asideDefaultProps;

export default Aside;
export { asideDefaultProps };
