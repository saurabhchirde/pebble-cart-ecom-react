import React from "react";
import { useFilter } from "../../../../Context/FilterContext";
import InputTypeTwo from "../../../UI/Input/InputTypeTwo";

const RatingSection = () => {
  const { state, dispatch } = useFilter();
  return (
    <div className="rating">
      <h2>Ratings</h2>
      <InputTypeTwo
        inputWrapper="radio-input"
        type="radio"
        name="radio"
        label="4 star & above"
        onClick={() => {
          dispatch({ type: "4+" });
        }}
      />
      <InputTypeTwo
        inputWrapper="radio-input"
        type="radio"
        name="radio"
        label="3 star & above"
        onClick={() => {}}
      />
      <InputTypeTwo
        inputWrapper="radio-input"
        type="radio"
        name="radio"
        label="2 star & above"
        onClick={() => {}}
      />
      <InputTypeTwo
        inputWrapper="radio-input"
        type="radio"
        name="radio"
        label="1 star & above"
        onClick={() => {}}
      />
    </div>
  );
};
export default RatingSection;
