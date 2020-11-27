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
 * Defines the H2 default props.
 * @category Components
 * @example
 * Example here...
 */
const H2DefaultProps = {
  ...semanticHeadingDefaultProps,
  level: 1,
};

/**
 * Displays the H2.
 * @category Components
 * @component
 * @example
 * return <H2 />
 */
const H2 = (props: TSemanticHeading) => {
  return <SemanticHeading {...props} />;
};

H2.defaultProps = H2DefaultProps;

export default H2;
export { H2DefaultProps };
