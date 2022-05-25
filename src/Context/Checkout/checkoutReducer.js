const checkoutReducer = (checkoutState, action) => {
  switch (action.type) {
    case "addressSelected":
      return {
        ...checkoutState,
        addressOverviewCheck: true,
      };

    case "addressDeSelected":
      return {
        ...checkoutState,
        addressOverviewCheck: false,
      };

    case "clearSelections":
      return {
        addressOverviewCheck: false,
        paymentOverviewCheck: false,
      };

    default:
      return checkoutState;
  }
};

export default checkoutReducer;
