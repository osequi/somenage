import { ReactNode, createElement } from "react";
import { cx } from "@emotion/css";

/**
 * Imports other types, components and hooks.
 */
import { useStyles } from "@lib";

/**
 * Defines the Cell type.
 * @category Components
 * @example
 * Example here...
 */
export type TCell = {
  /**
   * The unique id of the cell.
   * Cells are part of a list so they need a unique `key`.
   */
  id: string;
  /**
   * The name of the cell.
   * When cells are transformed into complex objects they need a name to aid transformations.
   * Example: For a cube names are front, back, left, right, top, bottom. Each side of the cube is transformed in a different way.
   */
  name?: string;
  /**
   * The padding of the cells.
   */
  padding: number;
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
  children: ReactNode;
  /**
   * The className of the element.
   * Serves the technical purpose of style chaining.
   */
  className: string;
} & typeof CellDefaultProps;

/**
 * Defines the Cell default props.
 * @category Components
 * @example
 * Example here...
 */
const CellDefaultProps = {
  id: null,
  name: null,
  as: "div",
  asProps: null,
  padding: 0,
  children: null,
  className: "Cell",
};

/**
 * Defines the styles.
 * @ignore
 */
const container = (props: TCell) => ({
  padding: props.padding ? `calc(${props.padding} * var(--lem))` : null,
});

/**
 * Displays the Cell.
 * @category Components
 * @component
 * @example
 * return <Cell />
 */
const Cell = (props: TCell) => {
  const { as, asProps, children, className } = props;
  const containerKlass = useStyles(container, props);

  const props2 = { className: cx(className, containerKlass), ...asProps };

  return createElement(as, props2, children);
};

Cell.defaultProps = CellDefaultProps;

export default Cell;
export { CellDefaultProps };
