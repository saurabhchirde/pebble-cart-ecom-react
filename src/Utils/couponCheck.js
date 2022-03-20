const couponCheck = (totalPrice, coupon, cartDispatch) => {
  switch (coupon) {
    case "PEBBLE":
      return cartDispatch({
        type: "discount",
        payload: { discountedAmount: (totalPrice * 30) / 100, percentage: 30 },
      });

    case "SAURABH":
      return cartDispatch({
        type: "discount",
        payload: { discountedAmount: (totalPrice * 50) / 100, percentage: 50 },
      });

    default:
      return cartDispatch({ type: "nodiscount", payload: 0 });
  }
};

export { couponCheck };
