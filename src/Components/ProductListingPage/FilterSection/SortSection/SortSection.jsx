import { useFilter } from "../../../../Context/FilterContext";
import InputTypeTwo from "../../../UI/Input/InputTypeTwo";

const SortSection = () => {
  const { filterState, filterDispatch } = useFilter();
  const { newest, lowTohHigh, highToLow } = filterState.bySort;

  return (
    <div className="sort">
      <h2>Sort by</h2>
      <InputTypeTwo
        inputWrapper="radio-input"
        type="radio"
        name="sort"
        checked={newest}
        label="New Arrival"
        onChange={() => {
          filterDispatch({ type: "Newest", payload: "Newest" });
        }}
      />
      <InputTypeTwo
        inputWrapper="radio-input"
        type="radio"
        name="sort"
        checked={lowTohHigh}
        label="Price - Low to High"
        onChange={() => {
          filterDispatch({ type: "LowToHigh", payload: "LowToHigh" });
        }}
      />
      <InputTypeTwo
        inputWrapper="radio-input"
        type="radio"
        name="sort"
        checked={highToLow}
        label="Price - High to Low"
        onChange={() => {
          filterDispatch({ type: "HighToLow", payload: "HighToLow" });
        }}
      />
    </div>
  );
};

export default SortSection;
