import { createContext, useContext, useReducer, useState } from "react";
import { v4 as uuid } from "uuid";

import {
  useSessionStorageGet,
  useSessionStorageSet,
} from "../../Hooks/useSessionStorage";

const initialAuthState = {
  login: false,
  token: "",
  user: {
    firstName: "",
    lastName: "",
    dp: "",
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
          addresses: action.payload.foundUser.addresses,
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

    case "addDemoAddress":
      return {
        ...auth,
        user: { addresses: [...action.payload] },
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
      return {
        login: false,
        token: "",
        user: {
          firstName: "",
          lastName: "",
          dp: "",
          addresses: [],
        },
      };

    default:
      return auth;
  }
};

const authContext = createContext(initialAuthState);

const AuthProvider = ({ children }) => {
  const [auth, authDispatch] = useReducer(
    authReducer,
    useSessionStorageGet("authState") ?? initialAuthState
  );
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [newAddress, setNewAddress] = useState(initialAddressState);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [showEditAddressModal, setShowEditAddressModal] = useState(false);

  useSessionStorageSet("authState", auth);
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
