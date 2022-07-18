import { createContext, useContext, useState } from "react";

const modalContext = createContext();

const ModalProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [showConfirmPayment, setShowConfirmPayment] = useState(false);

  return (
    <modalContext.Provider
      value={{
        showLogin,
        setShowLogin,
        showSignup,
        setShowSignup,
        showNavMenu,
        setShowNavMenu,
        showConfirmPayment,
        setShowConfirmPayment,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};

const useModal = () => useContext(modalContext);

export { ModalProvider, useModal };
