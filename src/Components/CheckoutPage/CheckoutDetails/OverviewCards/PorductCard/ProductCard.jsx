const ProductCard = ({ item }) => {
  const { title, src1, delivery } = item;

  return (
    <div className="cart-item-card checkout-item-card card-dark card-shadow-two">
      <div className="card-img-container">
        <img
          src={src1}
          className="img-responsive"
          alt="product"
          loading="lazy"
        />
      </div>
      <div className="card-body">
        <div className="card-text">
          <h1 className="card-title">{title}</h1>
          <h2 className="delivery-period">Delivery: {delivery}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
