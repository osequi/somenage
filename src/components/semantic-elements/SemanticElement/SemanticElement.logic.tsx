import { isNil, upperFirst, camelCase } from "lodash";

/**
 * Imports other types, components and hooks
 */
import type { TSemanticElement } from ".";

/**
 * Checks if all required props are provided.
 * @param  props The props object
 * @return       True, when all required props are set
 * @ignore
 */
const requiredPropsAreSet = (props: TSemanticElement): boolean => {
  const { children, title } = props;

  return !(isNil(children) && isNil(title));
};

/**
 * Sets the className when className is empty.
 * @param  props The props object
 * @return        The className
 * @ignore
 */
const nonEmptyClassname = (props: TSemanticElement): string => {
  const { className, as, title } = props;

  if (className) return className;

  /**
   * Returns `ClassName` when the other props are not defined.
   */
  if (!className && !title) return "ClassName";

  /**
   * Generates a className.
   * @example: NavMenu
   */
  const as2 = as ? upperFirst(as) : "";
  const title2 = title ? upperFirst(camelCase(title)) : "";

  return `${as2}${title2}`;
};

export { requiredPropsAreSet, nonEmptyClassname };
