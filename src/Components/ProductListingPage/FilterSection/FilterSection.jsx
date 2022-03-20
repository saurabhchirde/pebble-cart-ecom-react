import { useFilter } from "../../../Context";
import Button from "../../UI/Button/Button";
import IconButton from "../../UI/Button/IconButton";
import SortSection from "./SortSection/SortSection";
import BrandSection from "./BrandSection/BrandSection";
import CategorySection from "./CategorySection/CategorySection";
import IncludeOutOfStock from "./IncludeOutOfStock/IncludeOutOfStock";
import RatingSection from "./RatingSection/RatingSection";

const FilterSection = () => {
  const { filterDispatch } = useFilter();

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
              filterDispatch({ type: "Clear" });
            }}
            type="reset"
            label="Clear"
          />
        </div>
        <CategorySection />
        <BrandSection />
        <RatingSection />
        <SortSection />
        <IncludeOutOfStock />
      </form>
    </>
  );
};
export default FilterSection;
