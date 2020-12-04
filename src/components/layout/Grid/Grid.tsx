import React, { createElement, ReactNode } from "react";
import { cx } from "@emotion/css";

/**
 * Imports other types, components and hooks.
 */
import { useStyles, useResponsiveGridColumns } from "@hooks";

/**
 * Imports logic.
 */
import { fauxLinesStyle, calculateFauxLines } from "./Grid.fauxLines";
import { hasTitle, gridWithTitleStyles } from "./Grid.withTitle";

/**
 * Defines the Grid type.
 * @category Components
 * @example
 * Example here...
 */
export type TGrid = {
  /**
   * The width of the grid.
   * It can be any CSS width unit.
   */
  width?: string;
  /**
   * The height of the grid.
   * It can be any CSS width unit.
   */
  height?: string;
  /**
   * The number of columns, unitless.
   * The columns will be calculated using `grid-template-columns: repeat(columns, 1fr)`
   * When the columns is an array a responsive grid will be set up.
   * @example <Grid columns={[1,2]}> => 1 column grid on the first breakpoint, 2 column grid on the second breakpoint. Breakpoints are coming from the theme.
   */
  columns?: number[] | number;
  /**
   * The gap between the cells, unitless.
   * The gap will be a multiply of `var(--lem)`
   * Sets the gaps both horizontally with `column-gap` and vertically with `row-gap`.
   */
  gap?: number;
  /**
   * The padding of the children, unitless.
   * The padding will be a multiply of `var(--lem)`.
   */
  padding?: number;
  /**
   * The gap faux lines, aka the grid borders.
   * The grid borders look good only when there is no gap in the grid.
   * Therefore when fauxLines is set instead of grid gap we'll set a padding on the grid elements.
   */
  fauxLines?: "none" | "horizontal" | "vertical" | "both";
  /**
   * The container element in which the component is displayed.
   * Preferably a Semantic Element.
   */
  as?: any | string;
  /**
   * The props of the container.
   */
  asProps?: object;
  /**
   * The content to be rendered.
   */
  children?: ReactNode;
  /**
   * The className of the element.
   * Serves the technical purpose of style chaining.
   */
  className?: string;
} & typeof GridDefaultProps;

/**
 * Defines the Grid default props.
 * @category Components
 * @example
 * Example here...
 */
const GridDefaultProps = {
  width: "100%",
  height: "100%",
  columns: 1,
  gap: 0,
  padding: 0,
  fauxLines: "none",
  as: "div",
  asProps: null,
  children: null,
  className: null,
};

/**
 * Defines the grid container styles.
 * @ignore
 */
const container = (props: TGrid & any) => ({
  display: "grid",
  width: `${props.width}`,
  height: `${props.height}`,
  ...props.responsiveGridColumns,
  columnGap: props.borderLeftSelector ? 0 : `calc(${props.gap} * var(--lem))`,
  rowGap: props.borderLeftSelector ? 0 : `calc(${props.gap} * var(--lem))`,
  alignItems: "start",

  ["& > *"]: {
    padding: props.borderLeftSelector
      ? `0 calc(${props.gap} * var(--lem)) calc(${props.gap} * var(--lem)) 0`
      : `calc(${props.padding} * var(--lem))`,
  },
});

/**
 * Displays the Grid.
 * @category Components
 * @component
 * @example
 * return <Grid />
 */
const Grid = (props: TGrid) => {
  const { columns, as, asProps, children, className } = props;

  /**
   * Loads the responsive grid columns.
   */
  const responsiveGridColumns = useResponsiveGridColumns(columns);

  /**
   * Loads the faux lines.
   */
  const fauxLinesProps = calculateFauxLines(props);

  /**
   * Prepares the props for the styles.
   */
  const styleProps = fauxLinesProps
    ? {
        ...props,
        ...fauxLinesProps,
        responsiveGridColumns: responsiveGridColumns,
      }
    : { ...props, responsiveGridColumns: responsiveGridColumns };

  /**
   * Loads the styles.
   */
  const [containerKlass, fauxLinesStyleKlass, gridWithTitleKlass] = useStyles(
    [container, fauxLinesStyle, gridWithTitleStyles],
    { styleProps }
  );

  /**
   * Checks if grid has a title.
   */
  const gridHasTitle = hasTitle(props);

  /**
   * Checks if grid has multiple children.
   */
  const gridHasMultipleChildren = children && children.length !== undefined;

  /**
   * Prepares the props to render the component.
   */
  const propsGridWithoutTitle = {
    className: cx("Grid", containerKlass, fauxLinesStyleKlass, className),
    ...asProps,
  };

  const propsGridWithTitle = {
    className: cx("Grid", gridWithTitleKlass),
    ...asProps,
  };

  const props2 = gridHasTitle ? propsGridWithTitle : propsGridWithoutTitle;

  /**
   * Prepares the children.
   */
  const childrenWrapped =
    gridHasTitle && gridHasMultipleChildren ? (
      <div className={cx("GridItems", containerKlass, fauxLinesStyleKlass)}>
        {children}
      </div>
    ) : (
      children
    );

  return createElement(as, props2, childrenWrapped);
};

Grid.defaultProps = GridDefaultProps;

export default Grid;
export { GridDefaultProps };
