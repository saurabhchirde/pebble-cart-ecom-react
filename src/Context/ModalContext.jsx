import { createContext, useContext, useState } from "react";

const modalContext = createContext(null);

const ModalProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <modalContext.Provider
      value={{
        showLoginModal,
        setShowLoginModal,
        showSignupModal,
        setShowSignupModal,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};

const useModal = () => useContext(modalContext);

export { ModalProvider, useModal };
