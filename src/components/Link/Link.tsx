import React, { ReactNode } from "react";
import { cx } from "@emotion/css";
import NextLink from "next/link";

/**
 * Imports other types, components and hooks.
 */
import type { TLinkPresetNames } from "@theme";
import { useStyles, useLink } from "@hooks";

/**
 * Defines the Link type.
 * @category Components
 * @example
 * Example here...
 */
export type TLink = {
  type?: "internal" | "external";
  preset?: TLinkPresetNames;
  href?: string;
  title?: string;
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
  href: null,
  title: null,
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
  const { type, preset, href, title, children, className } = props;
  if (!href && !title) return null;

  // It fails back safely when no url given
  if (!href) return title;

  const linkStyle = useLink(preset);
  const linkKlass = useStyles(linkStyle);

  switch (type) {
    case "internal":
      return (
        <NextLink href={href}>
          <a title={title} className={cx("Link", className, linkKlass)}>
            {children}
          </a>
        </NextLink>
      );
    case "external":
      return (
        <a
          href={href}
          title={title}
          className={cx("Link", className, linkKlass)}
        >
          {children}
        </a>
      );
  }
};

Link.defaultProps = LinkDefaultProps;

export default Link;
export { LinkDefaultProps };
