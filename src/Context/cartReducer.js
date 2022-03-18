const cartReducer = (cartState, action) => {
  switch (action.type) {
    case "addToCart":
      return {
        ...cartState,
        cart: {
          items: [...cartState.cart.items, action.payload],
          qty: cartState.cart.qty + 1,
        },
        totalPrice: cartState.totalPrice + action.payload.price,
      };

    case "removeFromCart":
      return {
        ...cartState,
        cart: {
          items: [
            ...cartState.cart.items.filter((el) => {
              return el._id !== action.payload._id;
            }),
          ],
          qty: cartState.cart.qty < 1 ? 0 : cartState.cart.qty - 1,
        },
        totalPrice: cartState.totalPrice - action.payload.price,
      };

    case "couponCode":
      return {
        ...cartState,
        coupon: action.payload,
        couponError: false,
      };

    case "discount":
      return {
        ...cartState,
        discount: action.payload,
        couponError: false,
        coupon: "",
      };

    case "nodiscount":
      return {
        ...cartState,
        discount: 0,
        couponError: true,
      };

    default:
      return cartState;
  }
};

export { cartReducer };
