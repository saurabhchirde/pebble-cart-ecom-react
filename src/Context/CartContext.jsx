import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "./cartReducer";

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
    JSON.parse(sessionStorage.getItem("cartState")) ?? initialCartState
  );

  useEffect(() => {
    sessionStorage.setItem("cartState", JSON.stringify(cartState));
  }, [cartState]);

  return (
    <cartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { CartProvider, useCart };
