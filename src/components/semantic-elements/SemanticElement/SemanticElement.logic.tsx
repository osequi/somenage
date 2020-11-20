import { isNil, startCase } from "lodash";

/**
 * Imports other types, components and hooks
 */
import type { TSemanticElement } from ".";

/**
 * Checks if all required props are provided.
 * @param  props The props object
 * @return       True, when all required props are set
 */
const requiredPropsAreSet = (props: TSemanticElement): boolean => {
  const { children } = props;

  return !isNil(children);
};

/**
 * Sets the className when className is empty.
 * @param  props The props object
 * @return        The className
 */
const nonEmptyClassname = (props: TSemanticElement): string => {
  const { className, as, title } = props;

  if (className) return className;

  /**
   * Returns `ClassName` when the other props are not defined.
   */
  if (!className && !as && !title) return "ClassName";

  /**
   * Generates a className.
   * @example: NavMenu
   */
  const as2 = as ? startCase(as) : "";
  const title2 = title ? startCase(title) : "";

  return `${as2}${title2}`;
};

export { requiredPropsAreSet, nonEmptyClassname };
