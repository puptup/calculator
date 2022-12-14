import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import store from "../../store";
import router from "../../routes";
import ErrorBoundry from "../error-boundry/ErrorBoundry";
import { GlobalStyle } from "../../theme";

const App = () => {
  return (
    <ErrorBoundry>
      <GlobalStyle />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ErrorBoundry>
  );
};

export default App;
