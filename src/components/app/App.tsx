import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../../store";
import router from "../../routes";
import ErrorBoundry from "../error-boundry/ErrorBoundry";
import { GlobalStyle } from "../../theme";

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
