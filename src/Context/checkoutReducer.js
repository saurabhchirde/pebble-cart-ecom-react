const checkoutReducer = (checkoutState, action) => {
  switch (action.type) {
    case "itemOverviewToggle":
      return {
        ...checkoutState,
        itemOverviewCheck: !checkoutState.itemOverviewCheck,
      };
    case "addressOverviewToggle":
      return {
        ...checkoutState,
        addressOverviewCheck: !checkoutState.addressOverviewCheck,
      };
    case "paymentOverviewToggle":
      return {
        ...checkoutState,
        paymentOverviewCheck: !checkoutState.paymentOverviewCheck,
      };
  }
  return checkoutState;
};

export default checkoutReducer;
