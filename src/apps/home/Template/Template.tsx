import React, { ReactNode } from "react";
import { cx } from "@emotion/css";
import { useRouter } from "next/router";

/**
 * Imports other types, components and hooks.
 */
import { useStyles } from "@hooks";
import { Header } from "../Header";
import { Footer } from "../Footer";
/**
 * Defines the Template type.
 * @category Components
 * @example
 * Example here...
 */
export type TTemplate = {
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
  children: null,
};

/**
 * Displays the Template.
 * @category Components
 * @component
 * @example
 * return <Template />
 */
const Template = (props: TTemplate) => {
  const { children } = props;
  if (!children) return null;

  const router = useRouter();
  console.log("router:", router);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Template.defaultProps = TemplateDefaultProps;

export default Template;
export { TemplateDefaultProps };
