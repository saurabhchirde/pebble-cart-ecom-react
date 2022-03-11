import React from "react";
import InputTypeTwo from "../../../UI/Input/InputTypeTwo";

const BrandSection = () => {
  return (
    <div className="brand">
      <h2>Brand</h2>
      <div>
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked="checked"
          label="All"
          onChange={() => {}}
        />
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked=""
          label="Canon"
          onChange={() => {}}
        />
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked=""
          label="Nikon"
          onChange={() => {}}
        />
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked=""
          label="Sony"
          onChange={() => {}}
        />
      </div>
    </div>
  );
};
export default BrandSection;
