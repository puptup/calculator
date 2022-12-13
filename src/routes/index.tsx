import React from "react";

import { createBrowserRouter } from "react-router-dom";

import CalculatorCC from "../components/calculator/calculatorCC";
import CalculatorFC from "../components/calculator/calculatorFC";

import PageLayout from "../components/page-layout";

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
        path: "/CC",
        element: <CalculatorCC />,
      },
    ],
  },
]);
