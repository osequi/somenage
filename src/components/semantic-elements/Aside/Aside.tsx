import React from "react";

/**
 * Imports other types, components and hooks.
 */
import type { TSemanticElement } from "../";
import { SemanticElement, semanticElementDefaultProps } from "../";

/**
 * Defines the aside default props.
 * @category Components
 * @example
 * ...semanticElementDefaultProps,
 * as: "aside",
 */
const asideDefaultProps: TSemanticElement = {
  ...semanticElementDefaultProps,
  as: "aside",
};

/**
 * Displays an `<aside>` element.
 * @category Components
 * @component
 * @example
 * return (<Aside title="Aside title"/>)
 */
const Aside = (props: TSemanticElement) => {
  return <SemanticElement {...props} />;
};

Aside.defaultProps = asideDefaultProps;

export default Aside;
export { asideDefaultProps };
