import type { AppProps } from "next/app";
import React, { createContext, Context } from "react";
import { Context as ResponsiveContext } from "react-responsive";
import { SSRProvider } from "@react-aria/ssr";

import { theme } from "@theme";
import { TypographySetup, TypographyGridLines } from "@components/typography";
import { Template } from "@home/Template";

import "normalize.css";
import "../theme/typography/reset.css";
import "../theme/typography/fonts/fonts.css";

/**
 * Defines a context to hold the theme.
 */
const ThemeContext: Context<any> = createContext(null);

/**
 * Used for testing `useTheme`
 * @ignore
 * @see https://react-hooks-testing-library.com/usage/advanced-hooks#context
 */
const ThemeContextProvider = (value: object, children: any) => (
  <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
);

/**
 * Used for testing `useMediaQuery`
 * @ignore
 * @see https://github.com/contra/react-responsive
 */
const ResponsiveContextProvider = (value: number, children: any) => (
  <ResponsiveContext.Provider value={{ width: value }}>
    {children}
  </ResponsiveContext.Provider>
);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      <SSRProvider>
        <TypographySetup />
        <TypographyGridLines />
        <Template>
          <Component {...pageProps} />
        </Template>
      </SSRProvider>
    </ThemeContext.Provider>
  );
};

export default MyApp;
export { ThemeContext, ThemeContextProvider, ResponsiveContextProvider };
