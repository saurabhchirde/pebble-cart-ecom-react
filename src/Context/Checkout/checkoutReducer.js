const checkoutReducer = (checkoutState, action) => {
  switch (action.type) {
    case "gpayPay":
      return {
        ...checkoutState,
        paymentOverviewCheck: true,
      };

    case "applePay":
      return {
        ...checkoutState,
        paymentOverviewCheck: false,
      };

    case "masterPay":
      return {
        ...checkoutState,
        paymentOverviewCheck: false,
      };

    case "visaPay":
      return {
        ...checkoutState,
        paymentOverviewCheck: false,
      };

    case "paypalPay":
      return {
        ...checkoutState,
        paymentOverviewCheck: false,
      };

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
