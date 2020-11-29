import React from "react";
import { cx } from "@emotion/css";
import { useStyles } from "../../hooks";

/**
 * Imports other types, components and hooks.
 */

/**
 * Defines the TypographicGrid type.
 * @category Components
 * @example
 * Example here...
 */
export type TTypographicGrid = {} & typeof TypographicGridDefaultProps;

/**
 * Defines the TypographicGrid default props.
 * @category Components
 * @example
 * Example here...
 */
const TypographicGridDefaultProps = {};

/**
 * Defines the styles.
 * @ignore
 */
const container = {
  label: "Container",
};

/**
 * Displays the TypographicGrid.
 * @category Components
 * @component
 * @example
 * return <TypographicGrid />
 */
const TypographicGrid = (props: TTypographicGrid) => {
  const { containerKlass } = useStyles(container, props);

  return (
    <div className={cx("TypographicGrid", containerKlass)}>TypographicGrid</div>
  );
};

TypographicGrid.defaultProps = TypographicGridDefaultProps;

export default TypographicGrid;
export { TypographicGridDefaultProps };
