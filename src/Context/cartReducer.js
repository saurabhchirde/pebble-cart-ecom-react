const cartReducer = (cartState, action) => {
  const indexOfExistingItem = cartState.cart.findIndex(
    (item) => item._id === action.payload._id
  );
  const existingCartItems = cartState.cart[indexOfExistingItem];
  let updatedCartItems;

  switch (action.type) {
    case "addToCart":
      if (existingCartItems) {
        const updatedItem = {
          ...existingCartItems,
          qty: existingCartItems.qty + 1,
        };
        updatedCartItems = [...cartState.cart];
        updatedCartItems[indexOfExistingItem] = updatedItem;
      } else {
        updatedCartItems = cartState.cart.concat(action.payload);
      }

      return {
        ...cartState,
        cart: updatedCartItems,
        totalQty: cartState.totalQty + 1,
        totalPrice: cartState.totalPrice + 1 * action.payload.price,
      };

    case "removeFromCart":
      updatedCartItems = [
        ...cartState.cart.filter((el) => el._id !== action.payload._id),
      ];

      if (updatedCartItems.length === 0) {
        return {
          cart: [],
          totalQty: 0,
          totalPrice: 0,
          discount: 0,
          coupon: "",
        };
      }

      return {
        ...cartState,
        cart: updatedCartItems,
        totalQty: cartState.totalQty - action.payload.qty,
        totalPrice:
          cartState.totalPrice - action.payload.price * action.payload.qty,
      };

    case "decreaseQty":
      if (existingCartItems.qty === 1) {
        updatedCartItems = cartState.cart.filter(
          (el) => el._id !== action.payload._id
        );
      } else {
        const updatedItem = {
          ...existingCartItems,
          qty: existingCartItems.qty - 1,
        };
        updatedCartItems = [...cartState.cart];
        updatedCartItems[indexOfExistingItem] = updatedItem;
      }

      if (updatedCartItems.length === 0) {
        return {
          cart: [],
          totalQty: 0,
          totalPrice: 0,
          discount: 0,
          coupon: "",
        };
      }

      return {
        ...cartState,
        cart: updatedCartItems,
        totalQty: cartState.totalQty - 1,
        totalPrice: cartState.totalPrice - action.payload.price,
      };

    case "couponCode":
      return {
        ...cartState,
        coupon: action.payload,
      };

    case "discount":
      return {
        ...cartState,
        discount: action.payload.discountedAmount,
        discountPercentage: action.payload.percentage,
      };

    case "nodiscount":
      return {
        ...cartState,
        discount: 0,
      };

    default:
      return cartState;
  }
};

export { cartReducer };
