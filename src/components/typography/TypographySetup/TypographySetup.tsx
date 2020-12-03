import React from "react";
import Head from "next/head";

/**
 * Imports other types, components and hooks.
 */
import { useTypographicGrid } from "@lib";

/**
 * Sets up the typographic grid in the `<body>`.
 * @category Components
 * @component
 * @example
 * return <TypographySetup />
 */
const TypographySetup = () => {
  const css = useTypographicGrid("string");

  return (
    <Head>
      <style>{css}</style>
    </Head>
  );
};

export default TypographySetup;
