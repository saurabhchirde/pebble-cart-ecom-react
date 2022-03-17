import React from "react";
import { useFilter } from "../../../../Context/FilterContext";
import InputTypeTwo from "../../../UI/Input/InputTypeTwo";

const RatingSection = () => {
  const { filterState, filterDispatch } = useFilter();
  const { oneStar, twoStar, threeStar, fourStar } = filterState.byRating;

  return (
    <div className="rating">
      <h2>Ratings</h2>
      <InputTypeTwo
        inputWrapper="radio-input"
        type="radio"
        name="radio"
        checked={fourStar}
        label="4 star & above"
        onChange={() => {
          filterDispatch({ type: "4+", payload: "4+" });
        }}
      />
      <InputTypeTwo
        inputWrapper="radio-input"
        type="radio"
        name="radio"
        checked={threeStar}
        label="3 star & above"
        onChange={() => {
          filterDispatch({ type: "3+", payload: "3+" });
        }}
      />
      <InputTypeTwo
        inputWrapper="radio-input"
        type="radio"
        name="radio"
        checked={twoStar}
        label="2 star & above"
        onChange={() => {
          filterDispatch({ type: "2+", payload: "2+" });
        }}
      />
      <InputTypeTwo
        inputWrapper="radio-input"
        type="radio"
        name="radio"
        checked={oneStar}
        label="1 star & above"
        onChange={() => {
          filterDispatch({ type: "1+", payload: "1+" });
        }}
      />
    </div>
  );
};
export default RatingSection;
