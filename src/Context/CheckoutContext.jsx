import { createContext, useContext, useReducer } from "react";
import checkoutReducer from "./checkoutReducer";

const checkoutInitialState = {
  addressOverviewCheck: false,
  paymentOverviewCheck: false,
};

const checkoutContext = createContext(checkoutInitialState);

const CheckoutProvider = ({ children }) => {
  const [checkoutState, checkoutDispatch] = useReducer(
    checkoutReducer,
    checkoutInitialState
  );

  return (
    <checkoutContext.Provider value={{ checkoutState, checkoutDispatch }}>
      {children}
    </checkoutContext.Provider>
  );
};

const useCheckout = () => useContext(checkoutContext);

export { CheckoutProvider, useCheckout };
