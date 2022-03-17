import { Link } from "react-router-dom";

const RecommendedBanner = (props) => {
  return (
    <>
      <div className="recommended-banner">
        <div>
          <p>{props.subTitle} </p>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <Link to="products">
            <button onClick={props.onbtnClick} className="btn primary-btn-md">
              {props.btnLabel}
            </button>
          </Link>
          <a>
            <button
              onClick={props.onReadMoreClick}
              className="btn primary-text-btn-md"
            >
              {props.readMoreLabel}
            </button>
          </a>
        </div>
        <img
          src={props.imgSrc}
          alt="camera"
          loading="lazy"
          className="img-responsive"
        />
      </div>
    </>
  );
};
export default RecommendedBanner;
