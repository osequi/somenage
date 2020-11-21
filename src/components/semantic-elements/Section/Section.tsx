import React from "react";

/**
 * Imports other types, components and hooks.
 */
import type { TSemanticElement } from "../";
import { SemanticElement, semanticElementDefaultProps } from "../";

/**
 * Defines the section default props.
 * @category Components
 * @example
 * ...semanticElementDefaultProps,
 * as: "section",
 */
const sectionDefaultProps: TSemanticElement = {
  ...semanticElementDefaultProps,
  as: "section",
};

/**
 * Displays a `<section>` element.
 * @category Components
 * @component
 * @example
 * return (<Section title="Section title"/>)
 */
const Section = (props: TSemanticElement) => {
  return <SemanticElement {...props} />;
};

Section.defaultProps = sectionDefaultProps;

export default Section;
export { sectionDefaultProps };
