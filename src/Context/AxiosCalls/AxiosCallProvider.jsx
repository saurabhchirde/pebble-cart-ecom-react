import { createContext, useContext } from "react";
import axios from "axios";
import { useCart } from "../Cart/CartProvider";
import { useModal } from "../Modal/ModalProvider";
import { useAuth } from "../Auth/AuthProvider";
import { useAnimation } from "../Animation/AnimationProvider";

const axiosContext = createContext(null);

const AxiosCallProvider = ({ children }) => {
  const { cartDispatch } = useCart();
  const { setError, setShowError, setShowLogin, setShowSignupAlert } =
    useModal();
  const { authDispatch } = useAuth();
  const { showLoader } = useAnimation();

  // login
  const userLogin = async (loginConfig) => {
    const { url, data } = loginConfig;

    try {
      showLoader();
      const response = await axios.post(url, data);
      if (response.status === 200) {
        setError(
          `Welcome back ${response.data.foundUser.firstName} ${response.data.foundUser.lastName}`
        );
        //save login credentials
        authDispatch({
          type: "login",
          payload: response.data,
        });
        //set initial data
        cartDispatch({
          type: "authCartInitiate",
          payload: response.data.foundUser,
        });

        showLoader();
        setShowError(true);
        setShowLogin(false);
      }

      if (response.status === 201) {
        setError("Invalid Password, Try Again");
        showLoader();
        setShowError(true);
      }
    } catch (error) {
      let msg = JSON.stringify(error);
      let parsedMsg = JSON.parse(msg);
      const alertText =
        parsedMsg.status === 404
          ? "Email Address doesn't Exist, Please Signup"
          : "Server Error, Try Again";

      setError(alertText);
      setShowError(true);
      showLoader();
    }
  };

  // signup
  const userSignup = async (signupConfig) => {
    const { url, data } = signupConfig;

    try {
      showLoader();
      const response = await axios.post(url, data);
      if (response.status === 201) {
        setShowSignupAlert(true);
      }
      showLoader();
    } catch (error) {
      setError(error.message);
      showLoader();
      setShowError(true);
    }
  };

  // add to cart
  const addToCartOnServer = async (cartConfig) => {
    const { url, body, headers } = cartConfig;

    try {
      showLoader();
      const response = await axios.post(url, body, headers);
      cartDispatch({ type: "addToCartServer", payload: response.data.cart });
      showLoader();
    } catch (error) {
      setError(error.message);
      showLoader();
      setShowError(true);
    }
  };

  // remove from cart
  const removeCartItemFromServer = async (cartConfig) => {
    const { url, headers, item } = cartConfig;

    try {
      showLoader();
      const response = await axios.delete(`${url}/${item._id}`, headers);
      cartDispatch({
        type: "removeFromCartServer",
        payload: response.data.cart,
      });
      showLoader();
    } catch (error) {
      setError(error.message);
      showLoader();
      setShowError(true);
    }
  };

  // increase item qty on cart
  const increaseCartItemQtyOnServer = async (cartConfig) => {
    const { url, headers, actionIncrement, item } = cartConfig;
    try {
      showLoader();
      const response = await axios.post(
        `${url}/${item._id}`,
        actionIncrement,
        headers
      );
      cartDispatch({
        type: "incQtyOnCartServer",
        payload: response.data.cart,
      });
      showLoader();
    } catch (error) {
      setError(error.message);
      showLoader();
      setShowError(true);
    }
  };

  // decrease item qty on cart
  const decreaseCartItemQtyOnServer = async (cartConfig) => {
    const { url, headers, actionDecrement, item } = cartConfig;
    try {
      showLoader();
      const response = await axios.post(
        `${url}/${item._id}`,
        actionDecrement,
        headers
      );
      cartDispatch({
        type: "decQtyOnCartServer",
        payload: response.data.cart,
      });
      showLoader();
    } catch (error) {
      setError(error.message);
      showLoader();
      setShowError(true);
    }
  };

  // add to wishlist
  const addToWishlistOnServer = async (wishlistConfig) => {
    const { url, body, headers } = wishlistConfig;
    try {
      showLoader();
      const response = await axios.post(url, body, headers);
      cartDispatch({
        type: "addToWishlistServer",
        payload: response.data.wishlist,
      });
      showLoader();
    } catch (error) {
      setError(error.message);
      showLoader();
      setShowError(true);
    }
  };

  // remove from wishlit
  const removeWishlistItemFromServer = async (wishlistConfig) => {
    const { url, headers, item } = wishlistConfig;

    try {
      showLoader();
      const response = await axios.delete(`${url}/${item._id}`, headers);
      cartDispatch({
        type: "removeFromWishlistServer",
        payload: response.data.wishlist,
      });
      showLoader();
    } catch (error) {
      setError(error.message);
      showLoader();
      setShowError(true);
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
