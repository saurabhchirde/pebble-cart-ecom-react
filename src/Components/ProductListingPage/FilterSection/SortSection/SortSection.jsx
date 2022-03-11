import { useFilter } from "../../../../Context/FilterContext";
import InputTypeTwo from "../../../UI/Input/InputTypeTwo";

const SortSection = () => {
  const { dispatch } = useFilter();

  return (
    <div className="sort">
      <h2>Sort by</h2>
      <InputTypeTwo
        inputWrapper="radio-input"
        type="radio"
        name="sort"
        label="New Arrival"
        onClick={() => {
          dispatch({ type: "Newest", payload: "Newest" });
        }}
      />
      <InputTypeTwo
        inputWrapper="radio-input"
        type="radio"
        name="sort"
        label="Price - Low to High"
        onClick={() => {
          dispatch({ type: "LowToHigh", payload: "LowToHigh" });
        }}
      />
      <InputTypeTwo
        inputWrapper="radio-input"
        type="radio"
        name="sort"
        label="Price - High to Low"
        onClick={() => {
          dispatch({ type: "HighToLow", payload: "HighToLow" });
        }}
      />
    </div>
  );
};

export default SortSection;
