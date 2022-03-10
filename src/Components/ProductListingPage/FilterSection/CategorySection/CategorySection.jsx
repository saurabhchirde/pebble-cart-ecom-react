import React from "react";
import InputTypeTwo from "../../../UI/Input/InputTypeTwo";

const CategorySection = () => {
  return (
    <div className="category">
      <h2>Category</h2>
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
          label="Camera"
          onChange={() => {}}
        />
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked=""
          label="Lenses"
          onChange={() => {}}
        />
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked=""
          label="Tripods"
          onChange={() => {}}
        />
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked=""
          label="Accessories"
          onChange={() => {}}
        />
      </div>
    </div>
  );
};
export default CategorySection;
