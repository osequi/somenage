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
 * Defines the H6 default props.
 * @category Components
 * @example
 * Example here...
 */
const H6DefaultProps = {
  ...semanticHeadingDefaultProps,
  level: 6,
};

/**
 * Displays the H6.
 * @category Components
 * @component
 * @example
 * return <H6 />
 */
const H6 = (props: TSemanticHeading) => {
  return <SemanticHeading {...props} />;
};

H6.defaultProps = H6DefaultProps;

export default H6;
export { H6DefaultProps };
