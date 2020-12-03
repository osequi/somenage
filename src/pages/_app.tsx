import React, { createContext, Context } from "react";
import type { AppProps } from "next/app";

import { theme } from "@theme";
import { TypographySetup, TypographyGridLines } from "@components/typography";
import { Template } from "@home/Template";

import "normalize.css";
import "../theme/typography/reset.css";
import "../theme/fonts/fonts.css";

const ThemeContext: Context<any> = createContext(null);

/**
 * Used for testing `useTheme`
 * @ignore
 * @see https://react-hooks-testing-library.com/usage/advanced-hooks#context
 */
const ThemeContextProvider = (value, children) => (
  <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      <TypographySetup />
      {/*<TypographyGridLines />*/}
      <Template>
        <Component {...pageProps} />
      </Template>
    </ThemeContext.Provider>
  );
};

export default MyApp;
export { ThemeContext, ThemeContextProvider };
