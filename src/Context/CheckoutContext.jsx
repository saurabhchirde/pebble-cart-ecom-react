import { createContext, useContext, useReducer } from "react";
import checkoutReducer from "./checkoutReducer";

const checkoutContext = createContext({});

const CheckoutProvider = ({ children }) => {
  const [checkoutState, checkoutDispatch] = useReducer(checkoutReducer, {
    itemOverviewCheck: false,
    addressOverviewCheck: false,
    paymentOverviewCheck: false,
  });

  return (
    <checkoutContext.Provider value={{ checkoutState, checkoutDispatch }}>
      {children}
    </checkoutContext.Provider>
  );
};

const useCheckout = () => useContext(checkoutContext);

export { CheckoutProvider, useCheckout };
