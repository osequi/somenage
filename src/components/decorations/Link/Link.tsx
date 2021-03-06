import React, { ReactNode, useRef } from "react";
import { cx } from "@emotion/css";
import NextLink from "next/link";
import { useLink as useAriaLink } from "react-aria";

/**
 * Imports other types, components and hooks.
 */
import type { TState } from "@theme";
import { useStyles, usePreset } from "@hooks";

/**
 * Defines the Link type.
 * @category Components
 * @example
 * Example here...
 */
export type TLink = {
  type?: "internal" | "external";
  preset?: TState;
  state?: TState;
  href?: string;
  title?: string;
  target?: string;
  /**
   * The content to be rendered.
   */
  children?: ReactNode;
  /**
   * The className of the element.
   * Serves the technical purpose of style chaining.
   */
  className?: string;
} & typeof LinkDefaultProps;

/**
 * Defines the Link default props.
 * @category Components
 * @example
 * Example here...
 */
const LinkDefaultProps = {
  type: "internal",
  preset: "default",
  state: "default",
  href: null,
  title: null,
  target: null,
  children: null,
  className: null,
};

/**
 * Displays the Link.
 * @category Components
 * @component
 * @example
 * return <Link />
 */
const Link = (props: TLink) => {
  const { type, preset, state, href, title, children, className } = props;
  if (!href) return null;

  /**
   * Loads link state management and A11y props from `@react-aria`.
   */
  const ref = useRef();
  const isDisabled = state === "disabled";
  const { linkProps } = useAriaLink({ ...props, isDisabled: isDisabled }, ref);

  /**
   * Loads link style from the theme.
   */
  const linkStyle = usePreset("link", "default", state);
  const linkStyle2 = linkStyle && linkStyle.pop();
  const { state: linkStyleState, ...rest } = linkStyle2;
  console.log("rest:", rest);

  const linkKlass = useStyles(rest);

  /**
   * Puts together an internal link using `@next/link`.
   */
  const internalLink = (
    <NextLink href={href}>
      <a
        title={title}
        className={cx("Link", className, linkKlass)}
        {...linkProps}
      >
        {children}
      </a>
    </NextLink>
  );

  /**
   * Puts together an external link using `<a>`.
   */
  const externalLink = (
    <a
      href={href}
      title={title}
      className={cx("Link", className, linkKlass)}
      {...linkProps}
    >
      {children}
    </a>
  );

  switch (type) {
    case "internal":
      return internalLink;
    case "external":
      return externalLink;
  }
};

Link.defaultProps = LinkDefaultProps;

export default Link;
export { LinkDefaultProps };
