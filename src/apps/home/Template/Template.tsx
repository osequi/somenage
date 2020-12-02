import React, { ReactNode } from "react";
import Head from "next/head";

/**
 * Imports other types, components and hooks.
 */
import { useViewport } from "@hooks";
import { Grid } from "@components/layout";
import { Text } from "@components/typography";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { Menu } from "../Menu";
import { Content } from "../Content";

import type { TMenuItemStateNames } from "../MenuItem";

/**
 * Defines the Template type.
 * @category Components
 * @example
 * Example here...
 */
export type TTemplate = {
  siteTitle?: string;
  siteUrl?: string;
  /**
   * The content to be rendered.
   */
  children?: ReactNode;
} & typeof TemplateDefaultProps;

/**
 * Defines the Template default props.
 * @category Components
 * @example
 * Example here...
 */
const TemplateDefaultProps = {
  siteTitle: "Somenage",
  siteUrl: "/",
  children: null,
};

/**
 * Displays the Template.
 *
 * // NOTE: The Grid shouldn;t be semantic. It breaks the outliner. <Header> Should be the first semantic element
 * @category Components
 * @component
 * @example
 * return <Template />
 */
const Template = (props: TTemplate) => {
  const { children, siteTitle, siteUrl } = props;
  if (!children) return null;

  /**
   * Defines the page title.
   */
  const pageTitle = children?.props?.title;
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;

  /**
   * Sets the page title in `<head>`
   */
  const head = (
    <Head>
      <title key="title">{title}</title>
      <meta key="ogtitle" property="og:title" content={title} />
    </Head>
  );

  const menuState: TMenuItemStateNames = useViewport("<laptop")
    ? ("title-with-icon" as TMenuItemStateNames)
    : ("default" as TMenuItemStateNames);

  return (
    <>
      {head}
      <Grid>
        <Text>
          <Header siteTitle={siteTitle} siteUrl={siteUrl} />
          <Menu state={menuState} />
          <Content>{children}</Content>
          <Footer />
        </Text>
      </Grid>
    </>
  );
};

Template.defaultProps = TemplateDefaultProps;

export default Template;
export { TemplateDefaultProps };
