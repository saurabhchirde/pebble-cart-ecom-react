import React from "react";
import { useFilter } from "../../../../Context/FilterContext";
import InputTypeTwo from "../../../UI/Input/InputTypeTwo";

const OutOfStock = () => {
  const { state, dispatch } = useFilter();
  // console.log(state);

  return (
    <div className="sort">
      <h2>Out Of Stock</h2>
      <InputTypeTwo
        inputWrapper="radio-input"
        type="checkbox"
        name="sort"
        label="Include Out of Stock?"
        onClick={() => {
          dispatch({ type: "IncludeOutOfStock" });
        }}
      />
    </div>
  );
};

export default OutOfStock;
