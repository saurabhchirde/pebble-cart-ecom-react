import React from "react";
import Button from "../../UI/Button/Button";
import IconButton from "../../UI/Button/IconButton";
import BrandSection from "./BrandSection/BrandSection";
import CategorySection from "./CategorySection/CategorySection";
import OutOfStock from "./OutOfStock/OutOfStock";
import PriceSection from "./PriceSection/PriceSection";
import RatingSection from "./RatingSection/RatingSection";
import SortSection from "./SortSection/SortSection";

const FilterSection = () => {
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
          <Button type="reset" label="Clear" />
        </div>
        <PriceSection />
        <CategorySection />
        <BrandSection />
        <RatingSection />
        <SortSection />
        <OutOfStock />
      </form>
    </>
  );
};
export default FilterSection;
