import React from "react";

/**
 * Imports other types, components and hooks.
 */
import type { TSemanticElement } from "../";
import { SemanticElement, semanticElementDefaultProps } from "../";

/**
 * Defines the nav default props.
 * @category Components
 * @example
 * ...semanticElementDefaultProps,
 * as: "nav",
 */
const navDefaultProps: TSemanticElement = {
  ...semanticElementDefaultProps,
  as: "nav",
};

/**
 * Displays a `<nav>` element.
 * @category Components
 * @component
 * @example
 * return (<Nav title="Nav title"/>)
 */
const Nav = (props: TSemanticElement) => {
  return <SemanticElement {...props} />;
};

Nav.defaultProps = navDefaultProps;

export default Nav;
export { navDefaultProps };
