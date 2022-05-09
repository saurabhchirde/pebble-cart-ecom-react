import { useFilter, useTheme } from "../../../Context";
import Button from "../../UI/Button/Button";
import IconButton from "../../UI/Button/IconButton";
import SortSection from "./SortSection/SortSection";
import BrandSection from "./BrandSection/BrandSection";
import CategorySection from "./CategorySection/CategorySection";
import IncludeOutOfStock from "./IncludeOutOfStock/IncludeOutOfStock";
import RatingSection from "./RatingSection/RatingSection";
import { useState } from "react";
import PriceSection from "./PriceSection/PriceSection";

const FilterSection = (props) => {
  const { filterDispatch, setSearchInput } = useFilter();
  const [showFilter, setShowFilter] = useState(false);
  const { darkTheme } = useTheme();

  const clearClickHandler = () => {
    setSearchInput("");
    filterDispatch({ type: "Clear" });
  };

  const onClickShowFilterMobile = () => {
    setShowFilter((preState) => !preState);
  };

  const filterSection = `${showFilter ? "inline" : ""}`;

  return (
    <>
      <button
        onClick={onClickShowFilterMobile}
        className="show-filter-section-btn btn primary-text-btn-lg"
      >
        Filter <i className="fas fa-chevron-right"></i>
      </button>
      <form
        onSubmit={(e) => e.preventDefault()}
        id="filter-section"
        className={
          darkTheme ? "filter-section" : "filter-section filter-section-light"
        }
        style={{ display: filterSection }}
      >
        <IconButton
          onClick={onClickShowFilterMobile}
          btnClassName="filter-close-btn"
          icon="far fa-times-circle"
        />
        {props.camera && props.lens && props.tripod && props.accessories && (
          <div className="filter flex-row flex-justify-space-between">
            <h2>Filter</h2>
            <Button onClick={clearClickHandler} type="reset" label="Clear" />
          </div>
        )}
        <PriceSection />
        <CategorySection props={props} />
        <BrandSection />
        <RatingSection />
        <SortSection />
        <IncludeOutOfStock />
      </form>
    </>
  );
};
export default FilterSection;
