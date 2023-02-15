import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { MailProvider } from "./Context/MailContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MailProvider>
        <App />
      </MailProvider>
    </BrowserRouter>
  </React.StrictMode>
);
