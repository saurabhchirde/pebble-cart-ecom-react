const HotProductCard = (props) => {
  return (
    <>
      <a onClick={props.onClick}>
        <div className="card-vertical-info card-dark">
          <div className="card-img-container">
            <img src={props.imgSrc} alt="camera" loading="lazy" />
          </div>
          <div className="card-text">
            <h1>{props.title}</h1>
          </div>
        </div>
      </a>
    </>
  );
};

export default HotProductCard;
