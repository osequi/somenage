import React from "react";

/**
 * Imports other types, components and hooks.
 */
import type { TSemanticElement } from "../";
import { SemanticElement, semanticElementDefaultProps } from "../";

/**
 * Defines the footer default props.
 * @category Components
 * @example
 * ...semanticElementDefaultProps,
 * as: "footer",
 */
const footerDefaultProps: TSemanticElement = {
  ...semanticElementDefaultProps,
  as: "footer",
};

/**
 * Displays a `<footer>` element.
 * @category Components
 * @component
 * @example
 * return (<Footer title="Footer title"/>)
 */
const Footer = (props: TSemanticElement) => {
  return <SemanticElement {...props} />;
};

Footer.defaultProps = footerDefaultProps;

export default Footer;
export { footerDefaultProps };
