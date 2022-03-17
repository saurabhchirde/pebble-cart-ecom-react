import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { makeServer } from "./server";
import PebbleCartProviders from "./Context/PebbleCartProviders";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <PebbleCartProviders>
      <App />
    </PebbleCartProviders>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
