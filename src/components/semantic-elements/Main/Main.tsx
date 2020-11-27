import React from "react";

/**
 * Imports other types, components and hooks.
 */
import type { TSemanticElement } from "../";
import { SemanticElement, semanticElementDefaultProps } from "../";

/**
 * Defines the main default props.
 * @category Components
 * @example
 * ...semanticElementDefaultProps,
 * as: "main",
 */
const mainDefaultProps: TSemanticElement = {
  ...semanticElementDefaultProps,
  as: "main",
};

/**
 * Displays a `<main>` element.
 * @category Components
 * @component
 * @example
 * return (<Main title="Main title"/>)
 */
const Main = (props: TSemanticElement) => {
  return <SemanticElement {...props} />;
};

Main.defaultProps = mainDefaultProps;

export default Main;
export { mainDefaultProps };
