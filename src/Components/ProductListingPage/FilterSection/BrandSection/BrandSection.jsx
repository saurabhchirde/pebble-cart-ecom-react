import React from "react";
import { useFilter } from "../../../../Context/FilterContext";
import InputTypeTwo from "../../../UI/Input/InputTypeTwo";

const BrandSection = () => {
  const { filterState, filterDispatch } = useFilter();
  const { allBrand, canon, nikon, sony } = filterState.byBrand;

  return (
    <div className="brand">
      <h2>Brand</h2>
      <div>
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked={canon}
          label="Canon"
          onChange={() => {
            filterDispatch({ type: "Canon", payload: "Canon" });
          }}
        />
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked={nikon}
          label="Nikon"
          onChange={() => {
            filterDispatch({ type: "Nikon", payload: "Nikon" });
          }}
        />
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked={sony}
          label="Sony"
          onChange={() => {
            filterDispatch({ type: "Sony", payload: "Sony" });
          }}
        />
      </div>
    </div>
  );
};
export default BrandSection;
