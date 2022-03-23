import { createContext, useContext, useReducer } from "react";

const initialAuthState = {
  login: false,
  logout: false,
  token: "",
  user: {
    firstName: "",
    lastName: "",
    dp: "",
  },
  cart: {
    items: [],
    totalQty: 0,
    totalPrice: 0,
    discount: 0,
    discountPercentage: 0,
    coupon: "",
  },
  wishlist: [],
};

const authReducer = (auth, action) => {
  const indexOfExistingItem = auth.cart.items.findIndex(
    (item) => item._id === action.payload._id
  );
  const existingCartItems = auth.cart.items[indexOfExistingItem];
  let updatedCartItems;

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
        },
        cart: { ...auth.cart, items: action.payload.foundUser.cart },
        wishlist: action.payload.foundUser.wishlist,
      };

    case "logout":
      return {
        login: false,
        logout: false,
        token: "",
        user: {
          firstName: "",
          lastName: "",
          dp: "",
        },
        cart: {
          items: [],
          totalQty: 0,
          totalPrice: 0,
          discount: 0,
          discountPercentage: 0,
          coupon: "",
        },
        wishlist: [],
      };
    //
    case "addToCart":
      if (existingCartItems) {
        const updatedItem = {
          ...existingCartItems,
          qty: existingCartItems.qty + 1,
        };
        updatedCartItems = [...auth.cart.items];
        updatedCartItems[indexOfExistingItem] = updatedItem;
      } else {
        updatedCartItems = auth.cart.items.concat(action.payload);
      }
      return {
        ...auth,
        cart: {
          items: updatedCartItems,
          totalQty: auth.cart.totalQty + 1,
          totalPrice: auth.cart.totalPrice + 1 * action.payload.price,
        },
      };

    case "removeFromCart":
      updatedCartItems = [
        ...auth.cart.items.filter((el) => el._id !== action.payload._id),
      ];

      if (updatedCartItems.length === 0) {
        return {
          ...auth,
          cart: {
            items: [],
            totalQty: 0,
            totalPrice: 0,
            discount: 0,
            discountPercentage: 0,
            coupon: "",
          },
        };
      }
      return {
        ...auth,
        cart: {
          items: updatedCartItems,
          totalQty: auth.cart.totalQty - action.payload.qty,
          totalPrice:
            auth.cart.totalPrice - action.payload.price * action.payload.qty,
        },
      };

    case "addToWishlist":
      return {
        ...auth,
        wishlist: [...new Set([...auth.wishlist, action.payload])],
      };

    case "removeFromWishlist":
      console.log(
        auth.wishlist.filter((item) => {
          return item._id !== action.payload._id;
        })
      );
      return {
        ...auth,
        wishlist: [
          auth.wishlist.filter((item) => item._id !== action.payload._id),
        ],
      };

    case "decreaseQty":
      if (existingCartItems.qty === 1) {
        updatedCartItems = auth.cart.items.filter(
          (el) => el._id !== action.payload._id
        );
      } else {
        const updatedItem = {
          ...existingCartItems,
          qty: existingCartItems.qty - 1,
        };
        updatedCartItems = [...auth.cart.items];
        updatedCartItems[indexOfExistingItem] = updatedItem;
      }

      if (updatedCartItems.length === 0) {
        return {
          ...auth,
          cart: {
            items: [],
            totalQty: 0,
            totalPrice: 0,
            discount: 0,
            discountPercentage: 0,
            coupon: "",
          },
        };
      }
      return {
        ...auth,
        cart: {
          items: updatedCartItems,
          totalQty: auth.cart.totalQty - 1,
          totalPrice: auth.cart.totalPrice - action.payload.price,
        },
      };

    case "couponCode":
      return {
        ...auth,
        cart: { coupon: action.payload },
      };

    case "discount":
      return {
        ...auth,
        cart: {
          discount: action.payload.discountedAmount,
          discountPercentage: action.payload.percentage,
        },
      };

    case "nodiscount":
      return {
        ...auth,
        cart: { discount: 0 },
      };

    default:
      return auth;
  }
};

const authContext = createContext(initialAuthState);

const AuthProvider = ({ children }) => {
  const [auth, authDispatch] = useReducer(authReducer, initialAuthState);
  console.log(auth);
  return (
    <authContext.Provider value={{ auth, authDispatch }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { AuthProvider, useAuth };
