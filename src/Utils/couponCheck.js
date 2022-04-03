const couponCheck = (totalPrice, coupon) => {
  switch (coupon) {
    case "PEBBLE":
      return {
        totalDiscount: (totalPrice * 30) / 100,
        percentage: 30,
      };

    case "SAURABH":
      return {
        totalDiscount: (totalPrice * 50) / 100,
        percentage: 50,
      };

    default:
      return { totalDiscount: 0, percentage: null };
  }
};

export { couponCheck };
