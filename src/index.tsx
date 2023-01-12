import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Providers } from "./contexts/Provider";
import { GlobalStyle } from "./styles/GlobalStyle";
import "swiper/css/bundle";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Providers>
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
