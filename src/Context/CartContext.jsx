import { createContext, useContext, useState, useEffect } from "react";

const cartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(sessionStorage.getItem("cart")) ?? []
  );

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { CartProvider, useCart };
