import { createContext, useContext } from "react";
import axios from "axios";
import { useCart } from "../Cart/CartProvider";
import { useModal } from "../Modal/ModalProvider";
import { useAuth } from "../Auth/AuthProvider";
import { useAnimation } from "../Animation/AnimationProvider";
import { useAlert } from "../Alerts/AlertsProvider";

const axiosContext = createContext(null);

const AxiosCallProvider = ({ children }) => {
  const { cartDispatch } = useCart();
  const { setAlertText, setShowAlert, setShowLogin, setShowSignupAlert } =
    useModal();
  const { alertDispatch } = useAlert();
  const { authDispatch, setLoginInput, setShowAddressModal } = useAuth();
  const { showLoader } = useAnimation();

  // login
  const userLogin = async (loginConfig) => {
    const { url, data } = loginConfig;

    try {
      showLoader();
      const response = await axios.post(url, data);
      if (response.status === 200) {
        setAlertText(
          `Welcome back ${response.data.foundUser.firstName} ${response.data.foundUser.lastName}`
        );
        showLoader();
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
        setShowAlert(true);
        setLoginInput({ email: "", password: "" });
        setShowLogin(false);
      }

      if (response.status === 201) {
        setAlertText("Invalid Password, Try Again");
        showLoader();
        setShowAlert(true);
      }
    } catch (error) {
      setAlertText(error.response.data.errors);
      setShowAlert(true);
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
      setAlertText(error.response.data.errors);
      showLoader();
      setShowAlert(true);
    }
  };

  // add to cart
  const addToCartOnServer = async (cartConfig) => {
    const { url, body, headers } = cartConfig;

    try {
      showLoader();
      const response = await axios.post(url, body, headers);
      cartDispatch({ type: "addToCartServer", payload: response.data.cart });
      alertDispatch({ type: "addToCartAlert" });
      showLoader();
    } catch (error) {
      setAlertText("Server Down, Try Later");
      showLoader();
      setShowAlert(true);
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
      alertDispatch({ type: "removeFromCartAlert" });
      showLoader();
    } catch (error) {
      setAlertText(error.response.data.errors);
      showLoader();
      setShowAlert(true);
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
      alertDispatch({ type: "cartEditedAlert" });
      showLoader();
    } catch (error) {
      setAlertText(error.response.data.errors);
      showLoader();
      setShowAlert(true);
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
      alertDispatch({ type: "cartEditedAlert" });
      showLoader();
    } catch (error) {
      setAlertText(error.response.data.errors);
      showLoader();
      setShowAlert(true);
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
      alertDispatch({ type: "addToWishlistAlert" });
      showLoader();
    } catch (error) {
      setAlertText(error.response.data.errors);
      showLoader();
      setShowAlert(true);
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
      alertDispatch({ type: "removeFromWishlistAlert" });
      showLoader();
    } catch (error) {
      setAlertText(error.response.data.errors);
      showLoader();
      setShowAlert(true);
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

      alertDispatch({ type: "addAddressAlert" });
      showLoader();
    } catch (error) {
      setAlertText("Server Down, try later");
      showLoader();
      setShowAlert(true);
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
      alertDispatch({ type: "addressDeletedAlert" });
      showLoader();
    } catch (error) {
      setAlertText("Server Down, try later");
      showLoader();
      setShowAlert(true);
    }
  };

  // update address
  const updateAddressOnServer = async (updateAddressConfig) => {
    const { url, body, headers } = updateAddressConfig;
    const { address } = body;
    try {
      showLoader();
      const response = await axios.post(`${url}/${address._id}`, body, headers);
      console.log("Update", response);
      authDispatch({
        type: "updateAddressOnServer",
        payload: response.data.addresses,
      });
      setShowAddressModal(false);
      setAlertText("Address updated successfully");
      setShowAlert(true);
      console.log("Update", response.data);
      showLoader();
    } catch (error) {
      setAlertText("Server Down, try later");
      showLoader();
      setShowAlert(true);
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
        addAddressOnServer,
        removeAddressFromServer,
        updateAddressOnServer,
      }}
    >
      {children}
    </axiosContext.Provider>
  );
};

const useAxiosCalls = () => useContext(axiosContext);

export { AxiosCallProvider, useAxiosCalls };
