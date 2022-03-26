import { createContext, useContext } from "react";
import axios from "axios";
import { useCart } from "../Cart/CartProvider";
import { useModal } from "../Modal/ModalProvider";
import { useWishlist } from "../Wishlist/WishlistProvider";
import { useAuth } from "../Auth/AuthProvider";

const axiosContext = createContext(null);

const AxiosCallProvider = ({ children }) => {
  const { cartDispatch } = useCart();
  const { setError, setShowError, setShowLogin, setShowSignupAlert } =
    useModal();
  const { setWishlist } = useWishlist();
  const { authDispatch } = useAuth();

  // login
  const userLogin = async (loginConfig) => {
    const { url, data } = loginConfig;

    try {
      const response = await axios.post(url, data);
      setError(
        `Welcome back ${response.data.foundUser.firstName} ${response.data.foundUser.lastName}`
      );
      setShowError(true);

      authDispatch({
        type: "login",
        payload: response.data,
      });

      cartDispatch({
        type: "authCartInitiate",
        payload: response.data.foundUser.cart,
      });

      setWishlist(response.data.foundUser.wishlist);
      setShowLogin(false);
    } catch (error) {
      setError(error.message);
      setShowError(true);
    }
  };

  // signup
  const userSignup = async (signupConfig) => {
    const { url, data } = signupConfig;

    try {
      const response = await axios.post(url, data);
      if (response.status === 201) {
        setShowSignupAlert(true);
      }
    } catch (error) {
      setError(error.message);
      setShowError(true);
    }
  };

  // add to cart
  const addToCartOnServer = async (cartConfig) => {
    const { url, body, headers, item } = cartConfig;

    try {
      const res = await axios.post(url, body, headers);
      console.log(res.data);
    } catch (error) {
      setError(error.message);
      setShowError(true);
      cartDispatch({ type: "removeFromCart", payload: item });
    }
  };

  // remove from cart
  const removeCartItemFromServer = async (cartConfig) => {
    const { url, headers, item } = cartConfig;

    try {
      await axios.delete(`${url}/${item._id}`, headers);
    } catch (error) {
      cartDispatch({ type: "addToCart", payload: item });
      setError(error.message);
      setShowError(true);
    }
  };

  // increase item qty on cart
  const increaseCartItemQtyOnServer = async (cartConfig) => {
    const { url, headers, actionIncrement, item } = cartConfig;
    try {
      await axios.post(`${url}/${item._id}`, actionIncrement, headers);
    } catch (error) {
      setError(error.message);
      setShowError(true);
      cartDispatch({ type: "decreaseQty", payload: item });
    }
  };

  // decrease item qty on cart
  const decreaseCartItemQtyOnServer = async (cartConfig) => {
    const { url, headers, actionDecrement, item } = cartConfig;
    try {
      await axios.post(`${url}/${item._id}`, actionDecrement, headers);
    } catch (error) {
      setError(error.message);
      setShowError(true);
      cartDispatch({ type: "addToCart", payload: item });
    }
  };

  // add to wishlist
  const addToWishlistOnServer = async (wishlistConfig) => {
    const { url, body, headers, item } = wishlistConfig;
    try {
      const response = await axios.post(url, body, headers);
    } catch (error) {
      setError(error.message);
      setShowError(true);
      setWishlist((oldWishlist) => {
        return oldWishlist.filter((el) => {
          return el._id !== item._id;
        });
      });
    }
  };

  // remove from wishlit
  const removeWishlistItemFromServer = async (wishlistConfig) => {
    const { url, headers, item } = wishlistConfig;

    try {
      const response = await axios.delete(`${url}/${item._id}`, headers);
    } catch (error) {
      setError(error.message);
      setShowError(true);
      setWishlist((oldCart) => {
        return [...new Set([...oldCart, item])];
      });
    }
  };

  return (
    <axiosContext.Provider
      value={{
        userLogin,
        userSignup,
        addToCartOnServer,
        removeCartItemFromServer,
        increaseCartItemQtyOnServer,
        decreaseCartItemQtyOnServer,
        addToWishlistOnServer,
        removeWishlistItemFromServer,
      }}
    >
      {children}
    </axiosContext.Provider>
  );
};

const useAxiosCalls = () => useContext(axiosContext);

export { AxiosCallProvider, useAxiosCalls };
