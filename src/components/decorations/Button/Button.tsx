import React, { ReactNode } from "react";
import { cx } from "@emotion/css";
import { startCase, isNil } from "lodash";

/**
 * Imports other types, components and hooks.
 */
import type { TInteractiveStates } from "@theme";
import { useStyles } from "@hooks";

/**
 * Defines the presets for buttons.
 */
export type TButtonPresets = "default";

/**
 * Defines the Button type.
 * @category Components
 * @example
 * Example here...
 */
export type TButton = {
  preset?: TButtonPresets;
  /**
   * The content to be rendered.
   */
  children: ReactNode;
  /**
   * The className of the element.
   * Serves the technical purpose of style chaining.
   */
  className: string;
} & typeof ButtonDefaultProps;

/**
 * Defines the Button default props.
 * @category Components
 * @example
 * Example here...
 */
const ButtonDefaultProps = {
  preset: "default",
  children: null,
  className: null,
};

/**
 * Defines the default button styles.
 * @ignore
 */
const defaultButton = {
  label: "Container",
};

/**
 * Displays the Button.
 * @category Components
 * @component
 * @example
 * return <Button />
 */
const Button = (props: TButton) => {
  const { preset, children, className } = props;

  /**
   * Displays nothing if children is not defined.
   */
  if (isNil(children)) return null;

  /**
   * Loads styles.
   * @type {[type]}
   */
  const defaultButtonKlass = useStyles(defaultButton, props);

  /**
   * Matches styles with the variants.
   * @ignore
   */
  let klass = null;
  switch (preset) {
    case "default":
      klass = defaultButtonKlass;
  }

  return (
    <button
      className={cx("Button", klass, `Buttont${startCase(preset)}`, className)}
    >
      {children}
    </button>
  );
};

Button.defaultProps = ButtonDefaultProps;

export default Button;
export { ButtonDefaultProps };
