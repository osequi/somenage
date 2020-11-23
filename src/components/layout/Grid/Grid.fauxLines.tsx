/**
 * Defines the grid faux lines styles.
 */
const fauxLinesStyle = (props) => ({
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
 * Calculates the position of the faux lines.
 */
const calculateFauxLines = (props) => {
  const { fauxLines, columns, children } = props;

  if (fauxLines === "none") return null;

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
