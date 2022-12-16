import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import router from "../../routes";
import { persistor, store } from "../../store";
import { GlobalStyle } from "../../theme";
import ErrorBoundry from "../error-boundry/ErrorBoundry";

const App = () => {
  return (
    <ErrorBoundry>
      <GlobalStyle />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </ErrorBoundry>
  );
};

export default App;
