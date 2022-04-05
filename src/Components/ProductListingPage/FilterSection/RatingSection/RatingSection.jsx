import React from "react";
import { useFilter } from "../../../../Context";
import "./RatingSection.css";

const RatingSection = () => {
  const {
    filterState: { byRating },
    filterDispatch,
  } = useFilter();

  const onRatingChangeHandler = (e) => {
    filterDispatch({ type: "ratings", payload: e.target.value });
  };

  return (
    <div className="rating">
      <h2>Ratings</h2>
      <div className="rating-slider-label">
        <span className="rating-badge-star">
          <i className={byRating.oneStar ? "fas fa-star" : "far fa-star"}></i>
        </span>
        <span className="rating-badge-star">
          <i className={byRating.twoStar ? "fas fa-star" : "far fa-star"}></i>
        </span>
        <span className="rating-badge-star">
          <i className={byRating.threeStar ? "fas fa-star" : "far fa-star"}></i>
        </span>
        <span className="rating-badge-star">
          <i className={byRating.fourStar ? "fas fa-star" : "far fa-star"}></i>
        </span>
        <span className="rating-badge-star">
          <i className={byRating.fiveStar ? "fas fa-star" : "far fa-star"}></i>
        </span>
      </div>
      <div onChange={onRatingChangeHandler} className="range-input">
        <label>
          <input
            type="range"
            min="1"
            max="5"
            defaultValue="1"
            name="rating"
            step="1"
          />
        </label>
      </div>
    </div>
  );
};
export default RatingSection;
