import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DarkModeProvider } from "./contexts/darkModeContext";
import { ResponsiveProvider } from "./contexts/responsiveContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <ResponsiveProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ResponsiveProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
