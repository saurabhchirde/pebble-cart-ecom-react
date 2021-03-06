import AddressOverviewCard from "./OverviewCards/AddressOverviewCard";
import PaymentOverviewCard from "./OverviewCards/PaymentOverviewCard";
import ProductOverviewCard from "./OverviewCards/ProductOverviewCard";

const CheckoutDetails = () => {
  return (
    <div className="checkout-form">
      <ProductOverviewCard />
      <AddressOverviewCard />
      <PaymentOverviewCard />
    </div>
  );
};

export default CheckoutDetails;
