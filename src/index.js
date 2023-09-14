import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import { HelmetProvider } from "react-helmet-async";
import { hydrate, render } from "react-dom";

const root = document.getElementById("root");
if (root.hasChildNodes()) {
  hydrate(
    <HelmetProvider>
      <App />
    </HelmetProvider>,
    root
  );
} else {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>,
    root
  );
}
