import React, { ReactNode } from "react";
import { cx } from "@emotion/css";
import { useRouter } from "next/router";

/**
 * Imports other types, components and hooks.
 */
import { useStyles } from "@hooks";
import { Grid } from "@components/layout";
import { Text } from "@components/typography";

import { Header } from "../Header";
import { Footer } from "../Footer";
/**
 * Defines the Template type.
 * @category Components
 * @example
 * Example here...
 */
export type TTemplate = {
  siteTitle?: string;
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
  const { children, siteTitle } = props;
  if (!children) return null;

  const router = useRouter();

  return (
    <Grid>
      <Text>
        <Header siteTitle={siteTitle} />
        {children}
        <Footer />
      </Text>
    </Grid>
  );
};

Template.defaultProps = TemplateDefaultProps;

export default Template;
export { TemplateDefaultProps };
