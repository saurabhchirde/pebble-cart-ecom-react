import React from "react";
import { useFilter } from "../../../Context/FilterContext";
import Button from "../../UI/Button/Button";
import IconButton from "../../UI/Button/IconButton";
import SortSection from "./SortSection/SortSection";

const FilterSection = () => {
  const { state, dispatch } = useFilter();
  return (
    <>
      <button
        onClick={() => {}}
        className="show-filter-section-btn btn primary-text-btn-lg"
      >
        Filter <i className="fas fa-chevron-right"></i>
      </button>
      <form
        onSubmit={(e) => e.preventDefault()}
        id="filter-section"
        className="filter-section"
      >
        <IconButton
          btnClassName="filter-close-btn"
          icon="far fa-times-circle"
        />
        <div className="filter flex-row flex-justify-space-between">
          <h2>Filter</h2>
          <Button
            onClick={() => {
              dispatch({ type: "Clear" });
            }}
            type="reset"
            label="Clear"
          />
        </div>
        <SortSection />
      </form>
    </>
  );
};
export default FilterSection;
