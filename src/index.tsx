import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/app";
import { calculateExpression } from "./utils/calculator/calculator";
// ['96', '-', '(', '30', '-', '50',')' ]
console.log(
  calculateExpression([
    "96",
    "-",
    "(",
    "(",
    "30",
    "-",
    "50",
    ")",
    "*",
    "(",
    "-59",
    "+",
    "1",
    ")",
    ")",
  ])
);
const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(<App />);
