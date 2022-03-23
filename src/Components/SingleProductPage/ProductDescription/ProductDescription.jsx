const ProductDescription = ({ item }) => {
  return (
    <div className="single-product-description">
      <h2>About this item :</h2>
      <ol className="list-basic list-style-number">
        {item.description.map((info, index) => {
          return <li key={index}>{info}</li>;
        })}
      </ol>
    </div>
  );
};

export default ProductDescription;
