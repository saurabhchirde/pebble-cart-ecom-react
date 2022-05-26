import { createContext, useContext } from "react";
import axios from "axios";
import { useCart } from "../Cart/CartProvider";
import { useModal } from "../Modal/ModalProvider";
import { useAuth } from "../Auth/AuthProvider";
import { useAnimation } from "../Animation/AnimationProvider";
import { AlertToast } from "Components/Alert/AlertToast";
import { Login, Signup } from "Components";

const axiosContext = createContext(null);

const AxiosCallProvider = ({ children }) => {
  const { cartDispatch } = useCart();
  const { showLogin, showSignup, setShowLogin, setShowSignup } = useModal();
  const { authDispatch, setLoginInput, setShowAddressModal } = useAuth();
  const { showLoader } = useAnimation();

  // login
  const userLogin = async (loginConfig) => {
    const { url, data } = loginConfig;
    try {
      showLoader();
      const response = await axios.post(url, data);
      if (response.status === 200) {
        showLoader();
        AlertToast(
          "success",
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
        setLoginInput({ email: "", password: "" });
        setShowLogin(false);
      }
      if (response.status === 201) {
        showLoader();
        AlertToast("error", "Invalid Password, Try Again");
      }
    } catch (error) {
      showLoader();
      AlertToast("error", error.response.data.errors[0]);
    }
  };

  // signup
  const userSignup = async (signupConfig) => {
    const { url, data } = signupConfig;
    try {
      showLoader();
      const response = await axios.post(url, data);
      if (response.status === 201) {
        authDispatch({
          type: "signup",
          payload: response.data,
        });
        //set initial data
        cartDispatch({
          type: "authCartInitiate",
          payload: response.data.createdUser,
        });
        AlertToast(
          "success",
          `${response.data.createdUser.firstName} ${response.data.createdUser.lastName} Your account created successfully`
        );
        setShowSignup(false);
      }
      showLoader();
    } catch (error) {
      showLoader();
      AlertToast("error", error.response.data.errors[0]);
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
      AlertToast("error", "Server Down, Try Later");
      showLoader();
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
      showLoader();
      AlertToast("error", error.response.data.errors[0]);
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
      showLoader();
      AlertToast("error", error.response.data.errors[0]);
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
      showLoader();
      AlertToast("error", error.response.data.errors[0]);
    }
  };

  // empty all items from cart
  const emptyAllCartFromServer = async (cartConfig) => {
    const { url, headers } = cartConfig;
    try {
      showLoader();
      await axios.delete(url, headers);
      showLoader();
    } catch (error) {
      showLoader();
      AlertToast("error", error.response.data.errors[0]);
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
      showLoader();
      AlertToast("error", error.response.data.errors[0]);
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
      showLoader();
      AlertToast("error", error.response.data.errors[0]);
    }
  };

  // addresses
  const addAddressOnServer = async (addressConfig) => {
    const { url, body, headers } = addressConfig;
    try {
      showLoader();
      const response = await axios.post(url, body, headers);
      authDispatch({
        type: "addAddressOnServer",
        payload: response.data.addresses,
      });
      showLoader();
    } catch (error) {
      showLoader();
      AlertToast("error", error.response.data.errors[0]);
    }
  };

  // remove from address
  const removeAddressFromServer = async (addressConfig) => {
    const { url, headers, address } = addressConfig;
    try {
      showLoader();
      const response = await axios.delete(`${url}/${address._id}`, headers);
      authDispatch({
        type: "removeAddressFromServer",
        payload: response.data.addresses,
      });
      showLoader();
    } catch (error) {
      AlertToast("error", "Server Down, try later");
      showLoader();
    }
  };

  // update address
  const updateAddressOnServer = async (updateAddressConfig) => {
    const { url, body, headers } = updateAddressConfig;
    const { address } = body;
    try {
      showLoader();
      const response = await axios.post(`${url}/${address._id}`, body, headers);
      authDispatch({
        type: "updateAddressOnServer",
        payload: response.data.addresses,
      });
      setShowAddressModal(false);
      showLoader();
    } catch (error) {
      AlertToast("error", "Server Down, try later");
      showLoader();
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
        emptyAllCartFromServer,
        addToWishlistOnServer,
        removeWishlistItemFromServer,
        addAddressOnServer,
        removeAddressFromServer,
        updateAddressOnServer,
      }}
    >
      {showLogin && <Login />}
      {showSignup && <Signup />}
      {children}
    </axiosContext.Provider>
  );
};

const useAxiosCalls = () => useContext(axiosContext);

export { AxiosCallProvider, useAxiosCalls };
