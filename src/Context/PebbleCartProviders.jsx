import {
  ModalProvider,
  ProductsProvider,
  CartProvider,
  WishlistProvider,
  CheckoutProvider,
  FilterProvider,
  ScrollToTop,
} from "./index";
import { BrowserRouter } from "react-router-dom";

const PebbleCartProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <ScrollToTop>
          <ProductsProvider>
            <CartProvider>
              <FilterProvider>
                <CheckoutProvider>
                  <WishlistProvider>{children}</WishlistProvider>
                </CheckoutProvider>
              </FilterProvider>
            </CartProvider>
          </ProductsProvider>
        </ScrollToTop>
      </ModalProvider>
    </BrowserRouter>
  );
};

export default PebbleCartProviders;
