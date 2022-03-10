import React from "react";

const RecommendedBanner = (props) => {
  return (
    <>
      <div className="recommended-banner">
        <div>
          <p>{props.subTitle} </p>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <a>
            <button className="btn primary-btn-md">{props.btnLabel}</button>
          </a>
          <a>
            <button className="btn primary-text-btn-md">
              {props.readMoreLabel}
            </button>
          </a>
        </div>
        <img
          src={props.imgSrc}
          alt="image"
          loading="lazy"
          className="img-responsive"
        />
      </div>
    </>
  );
};
export default RecommendedBanner;
