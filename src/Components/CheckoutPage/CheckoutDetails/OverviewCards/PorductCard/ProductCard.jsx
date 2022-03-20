const ProductCard = ({ item }) => {
  const { title, src, delivery } = item;

  return (
    <div className="cart-item-card checkout-item-card card-dark">
      <div className="card-img-container">
        <img
          src={src}
          className="img-responsive"
          alt="product"
          loading="lazy"
        />
      </div>
      <div className="card-body">
        <div className="card-text">
          <h1 className="card-title">{title}</h1>
          <h2 className="delivery-period">Delivery: {delivery} Days</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
