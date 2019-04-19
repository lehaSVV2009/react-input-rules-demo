import React, { memo, Fragment } from "react";

import DisplayRulesPage from "../DisplayRulesPage";
import { GlobalStyle } from "./styles";

const App = memo(() => (
  <Fragment>
    <GlobalStyle />
    <DisplayRulesPage />
  </Fragment>
));

export default App;
