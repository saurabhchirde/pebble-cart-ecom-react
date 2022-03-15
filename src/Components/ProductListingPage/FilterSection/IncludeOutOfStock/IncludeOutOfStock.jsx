import React from "react";
import { useFilter } from "../../../../Context/FilterContext";
import InputTypeTwo from "../../../UI/Input/InputTypeTwo";

const IncludeOutOfStock = () => {
  const { state, dispatch } = useFilter();
  const { byStock } = state;

  return (
    <div className="sort">
      <h2>Out Of Stock</h2>
      <InputTypeTwo
        inputWrapper="radio-input"
        type="checkbox"
        checked={byStock}
        name="sort"
        label="Include Out of Stock?"
        onChange={() => {
          dispatch({ type: "IncludeOutOfStock", payload: "IncludeOutOfStock" });
        }}
      />
    </div>
  );
};

export default IncludeOutOfStock;
