const ProductImageSection = (props) => {
  return (
    <div className="single-product-image">
      <img src={props.mainImg} alt="product-image" loading="lazy" />
      <div className="single-product-image-options">
        <img src={props.img1} alt="product-image" loading="lazy" />
        <img src={props.img2} alt="product-image" loading="lazy" />
        <img src={props.img3} alt="product-image" loading="lazy" />
        <img src={props.img4} alt="product-image" loading="lazy" />
        <img src={props.img5} alt="product-image" loading="lazy" />
      </div>
    </div>
  );
};

export default ProductImageSection;
