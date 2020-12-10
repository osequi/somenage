/**
 * Checks if a grid has a title.
 */
const hasTitle = (props) => {
  const { asProps } = props;
  return asProps?.title || asProps?.heading;
};

/**
 * Defines the styles when the grid has a title set.
 */
const gridWithTitleStyles = (props) => ({
  background: "red",
  display: "grid",
  gridTemplateColumns: "1fr",
});

export { hasTitle, gridWithTitleStyles };
