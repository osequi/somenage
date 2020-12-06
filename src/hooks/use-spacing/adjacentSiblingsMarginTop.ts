/**
 * Every adjacent sibling has a top margin.
 * @ignore
 */
const adjacentSiblingsMarginTop = {
  ["& * + *"]: {
    marginTop: `var(--lem)`,
  },
  /**
   * The exceptions.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors
   */
  ["& * + li, tr + tr, *[style*='none'] + *"]: {
    marginTop: 0,
  },
};

export default adjacentSiblingsMarginTop;
