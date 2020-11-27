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
 * Defines the H1 default props.
 * @category Components
 * @example
 * Example here...
 */
const H1DefaultProps = {
  ...semanticHeadingDefaultProps,
  level: 1,
};

/**
 * Displays the H1.
 * @category Components
 * @component
 * @example
 * return <H1 />
 */
const H1 = (props: TSemanticHeading) => {
  return <SemanticHeading {...props} />;
};

H1.defaultProps = H1DefaultProps;

export default H1;
export { H1DefaultProps };
