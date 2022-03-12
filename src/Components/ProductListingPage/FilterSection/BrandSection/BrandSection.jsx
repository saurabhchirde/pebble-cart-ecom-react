import React from "react";
import { useFilter } from "../../../../Context/FilterContext";
import InputTypeTwo from "../../../UI/Input/InputTypeTwo";

const BrandSection = () => {
  const { state, dispatch } = useFilter();
  const { allBrand, canon, nikon, sony } = state.byBrand;

  return (
    <div className="brand">
      <h2>Brand</h2>
      <div>
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked={allBrand}
          label="All"
          onChange={() => {
            dispatch({ type: "AllBrand", payload: "AllBrand" });
          }}
        />
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked={canon}
          label="Canon"
          onChange={() => {
            dispatch({ type: "Canon", payload: "Canon" });
          }}
        />
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked={nikon}
          label="Nikon"
          onChange={() => {
            dispatch({ type: "Nikon", payload: "Nikon" });
          }}
        />
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked={sony}
          label="Sony"
          onChange={() => {
            dispatch({ type: "Sony", payload: "Sony" });
          }}
        />
      </div>
    </div>
  );
};
export default BrandSection;
