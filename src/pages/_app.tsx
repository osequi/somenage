import React, { createContext } from "react";
import type { AppProps } from "next/app";

import { theme } from "@theme";
import { TypographySetup, TypographyGridLines } from "@components/typography";

import "normalize.css";
import "../theme/typography/reset.css";
import "../theme/fonts/fonts.css";

const ThemeContext = createContext(null);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      <TypographySetup />
      {/*<TypographyGridLines />*/}
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
};

export default MyApp;
export { ThemeContext };
