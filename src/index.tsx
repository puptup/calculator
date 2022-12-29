import App from "@components/app";
import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(<App />);
