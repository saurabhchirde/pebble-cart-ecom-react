import { useFilter, useTheme } from "Context";
import {
  Button,
  IconButton,
  SortSection,
  BrandSection,
  CategorySection,
  IncludeOutOfStock,
  RatingSection,
  PriceSection,
} from "Components";
import { useState } from "react";
import { Link } from "react-router-dom";

interface FilterSectionProps {
  camera: boolean;
  lens: boolean;
  tripod: boolean;
  accessories: boolean;
}

export const FilterSection: React.FC<FilterSectionProps> = (props) => {
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
            <Link to="/products" replace>
              <Button onClick={clearClickHandler} type="reset" label="Clear" />
            </Link>
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
