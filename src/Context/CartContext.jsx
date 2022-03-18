import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";

const cartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: {
      items: [],
      qty: 0,
    },
    totalPrice: 0,
    discount: 0,
    coupon: "",
    couponError: false,
  });

  return (
    <cartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { CartProvider, useCart };
