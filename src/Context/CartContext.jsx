import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";

const cartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: [],
    qty: 0,
    totalPrice: 0,
    discount: 0,
    coupon: "",
  });

  return (
    <cartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { CartProvider, useCart };
