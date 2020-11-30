import React from "react";

/**
 * Imports other types, components and hooks.
 */
import type { TSemanticHeading } from "../SemanticHeading";
import {
  SemanticHeading,
  semanticHeadingDefaultProps,
} from "../SemanticHeading";

/**
 * Defines the H3 default props.
 * @category Components
 * @example
 * Example here...
 */
const H3DefaultProps: TSemanticHeading = {
  ...semanticHeadingDefaultProps,
  level: 3,
};

/**
 * Displays the H3.
 * @category Components
 * @component
 * @example
 * return <H3 />
 */
const H3 = (props: TSemanticHeading) => {
  return <SemanticHeading {...props} />;
};

H3.defaultProps = H3DefaultProps;

export default H3;
export { H3DefaultProps };
