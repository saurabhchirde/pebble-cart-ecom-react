import React from "react";
import { useFilter } from "../../../../Context";
import InputTypeTwo from "../../../UI/Input/InputTypeTwo";

const CategorySection = ({ props }) => {
  const { filterState, filterDispatch } = useFilter();
  const { camera, lenses, tripod, accessories } = filterState.byCategory;

  return (
    props.camera &&
    props.lens &&
    props.tripod &&
    props.accessories && (
      <div className="category">
        <h2>Category</h2>
        <div>
          <InputTypeTwo
            inputWrapper="checkbox-input"
            type="checkbox"
            name="check"
            checked={camera}
            label="Camera"
            onChange={() => {
              filterDispatch({ type: "Camera", payload: "Camera" });
            }}
          />
          <InputTypeTwo
            inputWrapper="checkbox-input"
            type="checkbox"
            name="check"
            checked={lenses}
            label="Lenses"
            onChange={() => {
              filterDispatch({ type: "Lenses", payload: "Lenses" });
            }}
          />
          <InputTypeTwo
            inputWrapper="checkbox-input"
            type="checkbox"
            name="check"
            checked={tripod}
            label="Tripods"
            onChange={() => {
              filterDispatch({ type: "Tripods", payload: "Tripods" });
            }}
          />
          <InputTypeTwo
            inputWrapper="checkbox-input"
            type="checkbox"
            name="check"
            checked={accessories}
            label="Accessories"
            onChange={() => {
              filterDispatch({ type: "Accessories", payload: "Accessories" });
            }}
          />
        </div>
      </div>
    )
  );
};
export default CategorySection;
