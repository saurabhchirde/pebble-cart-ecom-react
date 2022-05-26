import { createContext, useContext, useReducer, useState } from "react";
import { v4 as uuid } from "uuid";

import { useLocalStorageGet, useLocalStorageSet } from "Hooks/useLocalStorage";

const initialAuthState = {
  login: false,
  token: "",
  user: {
    firstName: "",
    lastName: "",
    dp: "",
    email: "",
    addresses: [],
  },
};

const initialAddressState = {
  _id: uuid(),
  fullName: "",
  address: "",
  pinCode: 0,
  mobile: 0,
  createdAt: "",
  updatedAt: "",
};

const authReducer = (auth, action) => {
  switch (action.type) {
    case "login":
      return {
        ...auth,
        login: true,
        token: action.payload.encodedToken,
        user: {
          firstName: action.payload.foundUser.firstName,
          lastName: action.payload.foundUser.lastName,
          dp:
            action.payload.foundUser.firstName.slice(0, 1) +
            action.payload.foundUser.lastName.slice(0, 1),
          email: action.payload.foundUser.email,
          addresses: action.payload.foundUser.addresses,
        },
      };

    case "signup":
      return {
        ...auth,
        login: true,
        token: action.payload.encodedToken,
        user: {
          firstName: action.payload.createdUser.firstName,
          lastName: action.payload.createdUser.lastName,
          dp:
            action.payload.createdUser.firstName.slice(0, 1) +
            action.payload.createdUser.lastName.slice(0, 1),
          email: action.payload.createdUser.email,
          addresses: action.payload.createdUser.addresses,
        },
      };

    case "getAddressesFromServer":
      return {
        ...auth,
        user: { ...auth.user, addresses: action.payload },
      };

    case "addAddressOnServer":
      return {
        ...auth,
        user: { ...auth.user, addresses: action.payload },
      };

    case "removeAddressFromServer":
      return {
        ...auth,
        user: { ...auth.user, addresses: action.payload },
      };

    case "updateAddressOnServer":
      return {
        ...auth,
        user: { ...auth.user, addresses: action.payload },
      };

    case "logout":
      return initialAuthState;
    default:
      return auth;
  }
};

const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [auth, authDispatch] = useReducer(
    authReducer,
    useLocalStorageGet("authState") ?? initialAuthState
  );
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [newAddress, setNewAddress] = useState(initialAddressState);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [showEditAddressModal, setShowEditAddressModal] = useState(false);

  useLocalStorageSet("authState", auth);
  return (
    <authContext.Provider
      value={{
        auth,
        authDispatch,
        loginInput,
        setLoginInput,
        newAddress,
        setNewAddress,
        initialAddressState,
        showAddressModal,
        setShowAddressModal,
        showProfileMenu,
        setShowProfileMenu,
        showEditAddressModal,
        setShowEditAddressModal,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { AuthProvider, useAuth };
