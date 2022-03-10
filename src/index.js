import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ModalProvider } from "./Context/ModalContext";
import { PageProvider } from "./Context/PageContext";
import { CartProvider } from "./Context/CartContext";
import { WishlistProvider } from "./Context/WishlistContext";

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <PageProvider>
        <CartProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </CartProvider>
      </PageProvider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
