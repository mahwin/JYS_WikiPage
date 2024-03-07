import React from "react";
import ReactDOM from "react-dom/client";

import "./style/reset.css";

import { theme } from "./style/theme";
import { ThemeProvider } from "styled-components";
import { router } from "./router";

import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
