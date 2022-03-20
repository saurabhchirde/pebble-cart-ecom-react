import { ModalProvider } from "./ModalContext";
import { ProductsProvider } from "./ProductsProvider";
import { CartProvider } from "./CartContext";
import { WishlistProvider } from "./WishlistContext";
import { BrowserRouter } from "react-router-dom";
import { CheckoutProvider } from "./CheckoutContext";

const PebbleCartProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <ProductsProvider>
          <CartProvider>
            <CheckoutProvider>
              <WishlistProvider>{children}</WishlistProvider>
            </CheckoutProvider>
          </CartProvider>
        </ProductsProvider>
      </ModalProvider>
    </BrowserRouter>
  );
};

export default PebbleCartProviders;
