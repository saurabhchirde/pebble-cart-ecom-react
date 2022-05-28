import { createContext, useContext, useState } from "react";

const checkoutContext = createContext(null);

const CheckoutProvider = ({ children }) => {
  const [selectedAddress, setSelectedAddress] = useState(false);

  return (
    <checkoutContext.Provider value={{ selectedAddress, setSelectedAddress }}>
      {children}
    </checkoutContext.Provider>
  );
};

const useCheckout = () => useContext(checkoutContext);

export { CheckoutProvider, useCheckout };
