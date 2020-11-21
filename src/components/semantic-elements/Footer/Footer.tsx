import React from "react";

/**
 * Imports other types, components and hooks
 */
import type { TSemanticElement } from "../";
import { SemanticElement, semanticElementDefaultProps } from "../";

/**
 * Defines the default props
 */
const footerDefaultProps: TSemanticElement = {
  ...semanticElementDefaultProps,
  as: "footer",
};

/**
 * Displays a `<footer>` element.
 */
const Footer = (props: TSemanticElement) => {
  return <SemanticElement {...props} />;
};

Footer.defaultProps = footerDefaultProps;

export default Footer;
export { footerDefaultProps };
