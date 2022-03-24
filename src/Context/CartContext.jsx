import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";
import { useSessionStorageGet, useSessionStorageSet } from "./SessionStorage";

const initialCartState = {
  cart: [],
  totalQty: 0,
  totalPrice: 0,
  discount: 0,
  discountPercentage: 0,
  coupon: "",
};

const cartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(
    cartReducer,
    useSessionStorageGet("cartState") ?? initialCartState
  );

  useSessionStorageSet("cartState", cartState);

  return (
    <cartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { CartProvider, useCart };
