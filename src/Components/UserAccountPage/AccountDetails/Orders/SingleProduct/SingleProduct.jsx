import "./SingleProduct.css";

export const SingleProduct = ({ product }) => {
  const { delivery, title, src1, qty } = product;

  return (
    <div className="order-card-top-section">
      <div className="order-card-image-description">
        <img src={src1} />
        <div className="ordered-product-details">
          <p>{title}</p>
          <button className="btn primary-btn-md product-reorder-btn">
            Re-order
          </button>
        </div>
      </div>
      <div>
        <p className="ordered-product-delivery-details">
          Est. deliverey: {delivery}
        </p>
        <p className="mg-1-top">Qty : {qty} </p>
      </div>
    </div>
  );
};
