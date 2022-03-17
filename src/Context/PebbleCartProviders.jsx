import { ModalProvider } from "./ModalContext";
import { ProductsProvider } from "./ProductsProvider";
import { CartProvider } from "./CartContext";
import { WishlistProvider } from "./WishlistContext";
import { BrowserRouter } from "react-router-dom";

const PebbleCartProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <ProductsProvider>
          <CartProvider>
            <WishlistProvider>{children}</WishlistProvider>
          </CartProvider>
        </ProductsProvider>
      </ModalProvider>
    </BrowserRouter>
  );
};

export default PebbleCartProviders;
