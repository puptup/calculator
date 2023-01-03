import ErrorBoundry from "@components/error-boundry/ErrorBoundry";
import router from "@routes";
import { persistor, store } from "@store";
import { GlobalStyle } from "@theme";
import { ToastPortal } from "puptuptoasts";
import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <ErrorBoundry>
      <GlobalStyle />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
      <ToastPortal />
    </ErrorBoundry>
  );
};

export default App;
