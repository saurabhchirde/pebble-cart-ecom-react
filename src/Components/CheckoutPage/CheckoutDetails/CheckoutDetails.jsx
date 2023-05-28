import { AddressOverviewCard, ProductOverviewCard } from "Components";

export const CheckoutDetails = () => {
  return (
    <div className="checkout-form">
      <ProductOverviewCard />
      <AddressOverviewCard />
    </div>
  );
};
