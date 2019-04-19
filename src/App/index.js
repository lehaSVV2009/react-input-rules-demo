import React, { memo, Fragment } from "react";
import { ThemeProvider } from "styled-components";

import RulesPage from "../RulesPage";
import { GlobalStyle, defaultTheme } from "./styles";

const App = memo(() => (
  <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={defaultTheme}>
      <RulesPage />
    </ThemeProvider>
  </Fragment>
));

export default App;
