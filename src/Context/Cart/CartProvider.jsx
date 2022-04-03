import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { cartReducer } from "./cartReducer";
import { useAuth } from "../Auth/AuthProvider";
import axios from "axios";
import { useModal } from "../Modal/ModalProvider";

const initialCartState = {
  cart: [],
  wishlist: [],
  totalQty: 0,
  totalPrice: 0,
  discount: 0,
  discountPercentage: 0,
  coupon: "",
};

const cartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
  const { auth } = useAuth();
  const { setError, setShowError } = useModal();
  const [addButton, setAddButton] = useState("Add to Cart");
  const [addWishlist, setAddWishlist] = useState("far fa-heart");

  useEffect(() => {
    if (auth.login) {
      const fetchData = async () => {
        try {
          const respCart = await axios.get("/api/user/cart", {
            headers: { authorization: auth.token },
          });
          const respWishlist = await axios.get("/api/user/wishlist", {
            headers: { authorization: auth.token },
          });

          cartDispatch({
            type: "getCartFromServer",
            payload: respCart.data.cart,
          });
          cartDispatch({
            type: "getWishlistFromServer",
            payload: respWishlist.data.wishlist,
          });
        } catch (error) {
          setError(error.message);
          setShowError(true);
        }
      };
      fetchData();
    } else {
      cartDispatch({ type: "emptyCart" });
    }
  }, [auth.login, auth.token]);

  return (
    <cartContext.Provider
      value={{
        cartState,
        cartDispatch,
        addButton,
        setAddButton,
        addWishlist,
        setAddWishlist,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { CartProvider, useCart };
