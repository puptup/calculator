import React from "react";
import { Outlet } from "react-router-dom";

import ErrorBoundry from "../error-boundry/ErrorBoundry";
import Header from "../header";

const PageLayout = () => {
  return (
    <ErrorBoundry>
      <Header />
      <Outlet />
    </ErrorBoundry>
  );
};

export default PageLayout;
