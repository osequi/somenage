/**
 * Every adjacent sibling has a top margin.
 * @ignore
 */
const adjacentSiblingsMarginTop = {
  ["& * + *"]: {
    marginTop: `var(--lem)`,
  },
  /**
   * The exceptions
   */
  ["& * + li, tr + tr, *[style*='none'] + *"]: {
    marginTop: 0,
  },
};

export default adjacentSiblingsMarginTop;
