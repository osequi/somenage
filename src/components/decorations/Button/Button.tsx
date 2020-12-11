import React, { ReactNode, useRef, useEffect } from "react";
import { cx } from "@emotion/css";
import { startCase, isNil } from "lodash";
import { useToggleButton } from "@react-aria/button";
import { useToggleState } from "@react-stately/toggle";

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
  state?: TInteractiveStates;
  updateState?: () => {};
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
  state: "default",
  updateState: null,
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
  const { preset, state, updateState, children, className } = props;

  /**
   * Displays nothing if children is not defined.
   */
  if (isNil(children)) return null;

  /**
   * Loads `react-aria` props.
   */
  const ref = useRef();
  const ariaState = useToggleState(props);
  const { buttonProps, isPressed } = useToggleButton(props, ariaState, ref);

  /**
   * Updates the button state.
   */
  useEffect(() => {
    if (!isPressed) return;
    const newState = state === "active" ? "default" : "active";
    updateState(newState);
  }, [isPressed]);

  /**
   * Loads styles.
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
      {...buttonProps}
      ref={ref}
    >
      {children}
    </button>
  );
};

Button.defaultProps = ButtonDefaultProps;

export default Button;
export { ButtonDefaultProps };
