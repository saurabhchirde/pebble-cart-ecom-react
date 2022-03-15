import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ModalProvider } from "./Context/ModalContext";
import { PageProvider } from "./Context/PageContext";
import { CartProvider } from "./Context/CartContext";
import { WishlistProvider } from "./Context/WishlistContext";
import { makeServer } from "./server";
import Mockman from "mockman-js";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <PageProvider>
        <CartProvider>
          <WishlistProvider>
            <App />
            {/* <Mockman /> */}
          </WishlistProvider>
        </CartProvider>
      </PageProvider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
