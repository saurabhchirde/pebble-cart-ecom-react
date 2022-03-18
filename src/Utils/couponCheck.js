const couponCheck = (totalPrice, coupon, cartDispatch) => {
  if (coupon === "PEBBLE") {
    cartDispatch({ type: "discount", payload: (totalPrice * 30) / 100 });
  } else if (coupon === "SAURABH") {
    cartDispatch({ type: "discount", payload: (totalPrice * 50) / 100 });
  } else if (coupon !== "PEBBLE" && coupon !== "") {
    cartDispatch({ type: "nodiscount", payload: 0 });
  } else {
    cartDispatch({ type: "nodiscount", payload: 0 });
  }
};

export { couponCheck };
