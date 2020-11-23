import type { TGrid } from ".";
import { isNil } from "lodash";

/**
 * Defines the grid faux lines styles.
 * @ignore
 */
const fauxLinesStyle = (props: TGrid & any) => ({
  ["&  > *"]: {
    boxSizing: "border-box",

    [`${props.borderLeftSelector}`]: {
      borderLeft: props.displayHorizontal ? "1px solid" : "none",
    },

    [`${props.borderBottomSelector}`]: {
      borderBottom: props.displayVertical ? "1px solid" : "none",
    },
  },
});

/**
 * Calculates the position of the grid faux lines.
 * @ignore
 */
const calculateFauxLines = (props: TGrid): object | null => {
  const { fauxLines, columns, children } = props;

  if (fauxLines === "none" || isNil(children)) return null;

  const rows = Math.floor(children.length / columns) + 1;

  const lastRow = columns * rows - columns + 1;
  const firstRow = columns - 1;
  const borderLeftException = `${columns}n - ${firstRow}`;
  const borderBottomException = `n + ${lastRow}`;

  const displayHorizontal = fauxLines === "both" || fauxLines === "vertical";
  const displayVertical = fauxLines === "both" || fauxLines === "horizontal";
  const borderLeftSelector = `&:not(:nth-child(${borderLeftException}))`;
  const borderBottomSelector = `&:not(:nth-child(${borderBottomException}))`;

  return {
    displayVertical: displayVertical,
    displayHorizontal: displayHorizontal,
    borderLeftSelector: borderLeftSelector,
    borderBottomSelector: borderBottomSelector,
  };
};

export { fauxLinesStyle, calculateFauxLines };
