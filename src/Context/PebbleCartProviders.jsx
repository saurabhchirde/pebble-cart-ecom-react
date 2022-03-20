import { ModalProvider } from "./ModalContext";
import { ProductsProvider } from "./ProductsProvider";
import { CartProvider } from "./CartContext";
import { WishlistProvider } from "./WishlistContext";
import { BrowserRouter } from "react-router-dom";
import { CheckoutProvider } from "./CheckoutContext";
import { FilterProvider } from "./FilterContext";

const PebbleCartProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <ProductsProvider>
          <CartProvider>
            <FilterProvider>
              <CheckoutProvider>
                <WishlistProvider>{children}</WishlistProvider>
              </CheckoutProvider>
            </FilterProvider>
          </CartProvider>
        </ProductsProvider>
      </ModalProvider>
    </BrowserRouter>
  );
};

export default PebbleCartProviders;
