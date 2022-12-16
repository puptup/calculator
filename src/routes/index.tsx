import CalculatorCC from "@components/calculator/calculatorCC";
import CalculatorFC from "@components/calculator/calculatorFC";
import PageLayout from "@components/page-layout";
import React from "react";
import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <CalculatorFC />,
      },
      {
        path: "/cc",
        element: <CalculatorCC />,
      },
    ],
  },
]);
