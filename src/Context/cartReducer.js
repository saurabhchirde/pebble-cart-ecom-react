const cartReducer = (cartState, action) => {
  switch (action.type) {
    case "addToCart":
      return {
        ...cartState,
        cart: [...cartState.cart, action.payload],
        qty: cartState.qty + 1,
        totalPrice: cartState.totalPrice + action.payload.price,
      };

    case "removeFromCart":
      return {
        ...cartState,
        cart: [
          ...cartState.cart.filter((el) => {
            return el._id !== action.payload._id;
          }),
        ],
        qty: cartState.qty < 1 ? 0 : cartState.qty - 1,
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
        discount: action.payload,
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
