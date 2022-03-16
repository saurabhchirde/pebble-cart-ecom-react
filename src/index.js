import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ModalProvider } from "./Context/ModalContext";
import { CartProvider } from "./Context/CartContext";
import { WishlistProvider } from "./Context/WishlistContext";
import { makeServer } from "./server";
import Mockman from "mockman-js";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./Context/ProductsProvider";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <ProductProvider>
          <CartProvider>
            <WishlistProvider>
              <App />
              {/* <Mockman /> */}
            </WishlistProvider>
          </CartProvider>
        </ProductProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
