const OrderSummary = () => {
  return (
    <div className="cart-price-table checkout-price-table price-table-dark">
      <h2>Order Summary</h2>
      <hr className="break-line" />
      <div className="cart-product-qty">
        <h3>Items</h3>
        <h3>1</h3>
      </div>
      <div className="cart-discount">
        <h3>Discount</h3>
        <h3>-</h3>
      </div>
      <hr className="break-line" />
      <div className="cart-total">
        <h3>Total</h3>
        <h3>24,900/-</h3>
      </div>
      <hr className="break-line" />
      <div className="cart-btns">
        <button className="btn primary-outline-btn-md hide">Edit Cart</button>
        <button className="btn primary-btn-md">Make Payment</button>
      </div>
      <p>Choose a payment method to continue checking out.</p>
    </div>
  );
};

export default OrderSummary;
