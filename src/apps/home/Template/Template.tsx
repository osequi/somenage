import React, { ReactNode, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

/**
 * Imports other types, components and hooks.
 */
import { useViewport } from "@hooks";
import { Grid } from "@components/layout";
import { Text } from "@components/typography";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { Content } from "../Content";

import type { TMenuState } from "../Menu";
import { Menu } from "../Menu";

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
   * Manages the menu state.
   */
  const [menuState, setMenuState] = useState("unknown");

  /**
   * Defines the page title.
   */
  const pageTitle = children?.props?.title;
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;

  /**
   * Sets the page title in `<head>`.
   */
  const head = (
    <Head>
      <title key="title">{title}</title>
      <meta key="ogtitle" property="og:title" content={title} />
    </Head>
  );

  /**
   * Checks if homepage is the current route.
   */
  const router = useRouter();
  const route = router?.route;
  const isHomePage = route === "/";

  /**
   * Checks if the device is laptop or larger.
   */
  const isLaptop = useViewport(">=laptop");

  /**
   * Updates the menu state on route change.
   */
  useEffect(() => {
    isHomePage
      ? setMenuState("hidden")
      : isLaptop
      ? setMenuState("default")
      : setMenuState("titleWithIcon");
  }, [isHomePage]);

  /**
   * Updates the menu state on device size.
   */
  useEffect(() => {
    isHomePage
      ? setMenuState("hidden")
      : isLaptop
      ? setMenuState("default")
      : setMenuState("titleWithIcon");
  }, [isLaptop]);

  return (
    <>
      {head}
      <Grid>
        <Text>
          <Header siteTitle={siteTitle} siteUrl={siteUrl} />
          <Menu state={menuState as TMenuState} />
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
