import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { LoginScreen } from "screens/login/login";
import reportWebVitals from "./reportWebVitals";
import { AppProviders } from "context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProviders>
      {" "}
      <LoginScreen />
    </AppProviders>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
