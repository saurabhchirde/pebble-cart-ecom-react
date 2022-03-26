const SquareCards = (props) => {
  return (
    <>
      <div className="card-vertical-info card-dark">
        <div className="card-img-container">
          <img src={props.imgSrc} alt="icon" />
        </div>
        <div className="card-text">
          <h1>{props.title}</h1>
        </div>
      </div>
    </>
  );
};
export default SquareCards;
