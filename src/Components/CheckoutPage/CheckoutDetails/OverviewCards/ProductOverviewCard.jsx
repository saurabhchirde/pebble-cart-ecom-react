const ProductOverviewCard = () => {
  return (
    <div className="checkout-item-overview">
      <details>
        <summary>
          <h1>Item Overview</h1>
          <i className="fas fa-check-circle"></i>
        </summary>
        <div className="cart-item-card checkout-item-card card-dark">
          <div className="card-img-container">
            <img
              src="./src/assets/images/polaroid-camera.png"
              className="img-responsive"
              alt="product"
              loading="lazy"
            />
          </div>
          <div className="card-body">
            <div className="card-text">
              <h1 className="card-title">
                Polaroid Now I-Type Instant Camera - Everything Box Black (6026)
              </h1>
              <h2 className="delivery-period">Delivery: 7-8 Days</h2>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
};

export default ProductOverviewCard;
