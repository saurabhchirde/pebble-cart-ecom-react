import {
  AddressOverviewCard,
  PaymentOverviewCard,
  ProductOverviewCard,
} from "Components";

export const CheckoutDetails = () => {
  return (
    <div className="checkout-form">
      <ProductOverviewCard />
      <AddressOverviewCard />
      {/* <PaymentOverviewCard /> */}
    </div>
  );
};
