import React, { createElement } from "react";
import { cx } from "@emotion/css";
import { isNil } from "lodash";

/**
 * Imports other types, components and hooks.
 */
import type { TGrid } from ".";
import { gridStyles } from ".";
import { useStyles, useResponsiveGridColumns } from "@hooks";

/**
 * Defines the grid with title styles.
 * @ignore
 */
const gridWithTitleStyles = () => ({
  display: "grid",
  gridTemplateColumns: "1fr",
});

/**
 * Displays a grid with title.
 */
const GridWithTitle = (props: TGrid) => {
  const { columns, as, asProps, children, className } = props;

  /**
   * Returns null when there are no children.
   */
  if (isNil(children)) return null;

  /**
   * Loads the responsive grid columns.
   */
  const responsiveGridColumns = useResponsiveGridColumns(columns);

  /**
   * Prepares the props for the styles.
   */
  const styleProps = { ...props, responsiveGridColumns: responsiveGridColumns };

  /**
   * Loads the styles.
   */
  const [gridWithTitleKlass, gridKlass] = useStyles(
    [gridWithTitleStyles, gridStyles],
    styleProps
  );

  /**
   * Checks if grid has multiple children.
   */
  const gridHasMultipleChildren = children && children.length !== undefined;

  /**
   * Prepares the children.
   */
  const childrenWrapped = gridHasMultipleChildren ? (
    <div className={cx("GridItems", gridKlass)} data-testid="grid-items">
      {children}
    </div>
  ) : (
    children
  );

  /**
   * Prepares the props to render the component.
   */
  const props2 = {
    className: cx("Grid GridWithTitle", gridWithTitleKlass, className),
    ...asProps,
  };

  return createElement(as, props2, childrenWrapped);
};

export default GridWithTitle;
