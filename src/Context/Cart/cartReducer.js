const cartReducer = (cartState, action) => {
  switch (action.type) {
    // server
    case "authCartInitiate":
      return {
        cart: action.payload.cart,
        wishlist: action.payload.wishlist,
        totalQty: 0,
        totalPrice: 0,
        discount: 0,
        coupon: "",
      };

    case "updateCartOnServer":
      return {
        ...cartState,
        totalQty: action.payload.totalQty,
        totalPrice: action.payload.totalPrice,
      };

    case "updatedDiscount":
      return {
        ...cartState,
        discount: action.payload,
      };

    case "getCartFromServer":
      return { ...cartState, cart: action.payload };

    case "getWishlistFromServer":
      return { ...cartState, wishlist: action.payload };

    case "addToCartServer":
      return { ...cartState, cart: action.payload };

    case "incQtyOnCartServer":
      return { ...cartState, cart: action.payload };

    case "decQtyOnCartServer":
      return { ...cartState, cart: action.payload };

    case "removeFromCartServer":
      return { ...cartState, cart: action.payload };

    case "addToWishlistServer":
      return { ...cartState, wishlist: action.payload };

    case "removeFromWishlistServer":
      return { ...cartState, wishlist: action.payload };

    case "emptyCart":
      return { ...cartState, cart: [], wishlist: [] };

    //client side

    case "couponCode":
      return {
        ...cartState,
        coupon: action.payload,
      };

    case "emptyCoupon":
      return {
        ...cartState,
        coupon: "",
      };

    case "couponCheck":
      return {
        ...cartState,
        discount: action.payload.totalDiscount,
        discountPercentage: action.payload.percentage,
      };

    default:
      return cartState;
  }
};

export { cartReducer };
