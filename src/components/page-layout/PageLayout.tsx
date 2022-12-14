import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../header";
import { MainWrapper } from "./styles";

const PageLayout = () => {
  return (
    <MainWrapper>
      <Header />

      <Outlet />
    </MainWrapper>
  );
};

export default PageLayout;
