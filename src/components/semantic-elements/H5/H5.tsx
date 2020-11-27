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
 * Defines the H5 default props.
 * @category Components
 * @example
 * Example here...
 */
const H5DefaultProps = {
  ...semanticHeadingDefaultProps,
  level: 1,
};

/**
 * Displays the H5.
 * @category Components
 * @component
 * @example
 * return <H5 />
 */
const H5 = (props: TSemanticHeading) => {
  return <SemanticHeading {...props} />;
};

H5.defaultProps = H5DefaultProps;

export default H5;
export { H5DefaultProps };
