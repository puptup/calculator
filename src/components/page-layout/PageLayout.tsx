import { useAppSelector } from "@hooks";
import { MainWrapper } from "@styles/pageLayout";
import { themeByType } from "@theme";
import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Header from "../header";

const PageLayout = () => {
  const theme = useAppSelector((state) => state.theme.actual);

  return (
    <ThemeProvider theme={themeByType[theme]}>
      <MainWrapper>
        <Header />
        <Outlet />
      </MainWrapper>
    </ThemeProvider>
  );
};

export default PageLayout;
