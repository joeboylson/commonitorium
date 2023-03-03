import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SERVER_URL } from "./constants";

// import global styles
import "./index.css";

console.group("::: init");
console.log({ SERVER_URL });
console.groupEnd();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
