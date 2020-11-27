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
 * Defines the H4 default props.
 * @category Components
 * @example
 * Example here...
 */
const H4DefaultProps = {
  ...semanticHeadingDefaultProps,
  level: 1,
};

/**
 * Displays the H4.
 * @category Components
 * @component
 * @example
 * return <H4 />
 */
const H4 = (props: TSemanticHeading) => {
  return <SemanticHeading {...props} />;
};

H4.defaultProps = H4DefaultProps;

export default H4;
export { H4DefaultProps };
