import React from "react";

/**
 * Imports other types, components and hooks.
 */
import type { TSemanticElement } from "../";
import { SemanticElement, semanticElementDefaultProps } from "../";

/**
 * Defines the header default props.
 * @category Components
 * @example
 * ...semanticElementDefaultProps,
 * as: "header",
 */
const headerDefaultProps: TSemanticElement = {
  ...semanticElementDefaultProps,
  as: "header",
};

/**
 * Displays a `<header>` element.
 * @category Components
 * @component
 * @example
 * return (<Header title="Header title"/>)
 */
const Header = (props: TSemanticElement) => {
  return <SemanticElement {...props} />;
};

Header.defaultProps = headerDefaultProps;

export default Header;
export { headerDefaultProps };
