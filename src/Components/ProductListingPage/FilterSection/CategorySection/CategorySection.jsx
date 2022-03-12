import React from "react";
import { useFilter } from "../../../../Context/FilterContext";
import InputTypeTwo from "../../../UI/Input/InputTypeTwo";

const CategorySection = () => {
  const { state, dispatch } = useFilter();
  const { allCategory, camera, lenses, tripod, accessories } = state.byCategory;

  return (
    <div className="category">
      <h2>Category</h2>
      <div>
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked={allCategory}
          label="All"
          onChange={() => {
            dispatch({ type: "AllCategory", payload: "AllCategory" });
          }}
        />
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked={camera}
          label="Camera"
          onChange={() => {
            dispatch({ type: "Camera", payload: "Camera" });
          }}
        />
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked={lenses}
          label="Lenses"
          onChange={() => {
            dispatch({ type: "Lenses", payload: "Lenses" });
          }}
        />
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked={tripod}
          label="Tripods"
          onChange={() => {
            dispatch({ type: "Tripods", payload: "Tripods" });
          }}
        />
        <InputTypeTwo
          inputWrapper="checkbox-input"
          type="checkbox"
          name="check"
          checked={accessories}
          label="Accessories"
          onChange={() => {
            dispatch({ type: "Accessories", payload: "Accessories" });
          }}
        />
      </div>
    </div>
  );
};
export default CategorySection;
