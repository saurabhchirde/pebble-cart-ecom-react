export { CartProvider, useCart } from "./Cart/CartProvider";
export { FilterProvider, useFilter } from "./Filter/FilterProvider";
export { ModalProvider, useModal } from "./Modal/ModalProvider";
export {
  ProductsProvider,
  useProductProvider,
} from "./ProductList/ProductsProvider";
export { CheckoutProvider, useCheckout } from "./Checkout/CheckoutProvider";
export { ScrollToTop } from "./ScrollToTop/ScrollToTop";
export { AuthProvider, useAuth } from "./Auth/AuthProvider";
export {
  useLocalStorageGet,
  useLocalStorageSet,
} from "../Hooks/useLocalStorage";
export { AnimationProvider, useAnimation } from "./Animation/AnimationProvider";

export {
  AxiosCallProvider,
  useAxiosCalls,
} from "./AxiosCalls/AxiosCallProvider";
export { ThemeProvider, useTheme } from "./ThemeProvider/ThemeProvider";

export interface ChildrenComponentProps {
  children: React.ReactNode;
}
