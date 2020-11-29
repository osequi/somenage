import React, { ReactNode } from "react";
import { cx } from "@emotion/css";
import Head from "next/head";

/**
 * Imports other types, components and hooks.
 */
import { useStyles } from "@hooks";
import { Grid } from "@components/layout";
import { Text } from "@components/typography";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { Menu } from "../Menu";
import { Content } from "../Content";

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
  children: ReactNode;
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

  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta key="ogtitle" property="og:title" content={title} />
      </Head>
      <Grid>
        <Text>
          <Header siteTitle={siteTitle} siteUrl={siteUrl} />
          <Menu />
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
