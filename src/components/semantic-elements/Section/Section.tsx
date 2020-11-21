import React from "react";

/**
 * Imports other types, components and hooks
 */
import type { TSemanticElement } from "../";
import { SemanticElement, semanticElementDefaultProps } from "../";

/**
 * Defines the default props
 */
const sectionDefaultProps: TSemanticElement = {
  ...semanticElementDefaultProps,
  as: "section",
};

/**
 * Displays a `<section>` element.
 */
const Section = (props: TSemanticElement) => {
  return <SemanticElement {...props} />;
};

Section.defaultProps = sectionDefaultProps;

export default Section;
export { sectionDefaultProps };
