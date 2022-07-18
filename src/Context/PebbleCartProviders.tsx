import {
  ModalProvider,
  ProductsProvider,
  CartProvider,
  CheckoutProvider,
  FilterProvider,
  ScrollToTop,
  AuthProvider,
  AxiosCallProvider,
  AnimationProvider,
  ThemeProvider,
} from "./index";
import { BrowserRouter } from "react-router-dom";
import React from "react";

interface PebbleCartProvidersProps {
  children: React.ReactNode;
}

const PebbleCartProviders = ({ children }: PebbleCartProvidersProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <AnimationProvider>
            <ModalProvider>
              <ProductsProvider>
                <CartProvider>
                  <FilterProvider>
                    <ScrollToTop>
                      <CheckoutProvider>
                        <AxiosCallProvider>{children}</AxiosCallProvider>
                      </CheckoutProvider>
                    </ScrollToTop>
                  </FilterProvider>
                </CartProvider>
              </ProductsProvider>
            </ModalProvider>
          </AnimationProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default PebbleCartProviders;
