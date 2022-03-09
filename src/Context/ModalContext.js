import { createContext, useContext, useState } from "react";

const modalContext = createContext();

const ModalProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [loginButton, setLoginButton] = useState("Login");
  return (
    <modalContext.Provider
      value={{
        showLoginModal,
        setShowLoginModal,
        showSignupModal,
        setShowSignupModal,
        loginButton,
        setLoginButton,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};

const useModal = () => useContext(modalContext);

export { ModalProvider, useModal };
