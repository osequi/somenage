import React from "react";
import { cx } from "@emotion/css";
import { useStyles } from "@hooks";

/**
 * Imports other types, components and hooks.
 */

/**
 * Defines the SemanticHtml5 type.
 * @category Components
 * @example
 * Example here...
 */
export type TSemanticHtml5 = {} & typeof SemanticHtml5DefaultProps;

/**
 * Defines the SemanticHtml5 default props.
 * @category Components
 * @example
 * Example here...
 */
const SemanticHtml5DefaultProps = {};

/**
 * Defines the styles.
 * @ignore
 */
const container = {
  label: "Container",
};

/**
 * Displays the SemanticHtml5.
 * @category Components
 * @component
 * @example
 * return <SemanticHtml5 />
 */
const SemanticHtml5 = (props: TSemanticHtml5) => {
  const { containerKlass } = useStyles(container, props);

  return (
    <div className={cx("SemanticHtml5", containerKlass)}>SemanticHtml5</div>
  );
};

SemanticHtml5.defaultProps = SemanticHtml5DefaultProps;

export default SemanticHtml5;
export { SemanticHtml5DefaultProps };
