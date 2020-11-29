import React, { ReactNode, useRef } from "react";
import { cx } from "@emotion/css";
import NextLink from "next/link";
import { useLink as useAriaLink } from "react-aria";

/**
 * Imports other types, components and hooks.
 */
import type { TLinkStylePresetNames, TLinkStatePresetNames } from "@theme";
import { useStyles, useLinkStyle } from "@hooks";

/**
 * Defines the Link type.
 * @category Components
 * @example
 * Example here...
 */
export type TLink = {
  type?: "internal" | "external";
  preset?: TLinkStylePresetNames;
  state?: TLinkStatePresetNames;
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
  if (!href && !title) return null;

  /**
   * It fails back safely to `title` when no url given.
   */
  if (!href) return title;

  /**
   * Loads link state management and A11y props from `@react-aria`.
   */
  const ref = useRef();
  const isDisabled = state === "disabled";
  const { linkProps } = useAriaLink({ ...props, isDisabled: isDisabled }, ref);

  /**
   * Loads link style from the theme.
   */
  const linkStyle = useLinkStyle(preset, state);
  const linkKlass = useStyles(linkStyle);

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
