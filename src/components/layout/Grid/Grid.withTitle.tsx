/**
 * Checks if a grid has a title.
 */
const hasTitle = (asProps) => {
  return asProps && asProps?.title;
};

/**
 * Defines the styles when the grid has a title set.
 */
const gridWithTitleStyles = (props) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
});

export { hasTitle, gridWithTitleStyles };
