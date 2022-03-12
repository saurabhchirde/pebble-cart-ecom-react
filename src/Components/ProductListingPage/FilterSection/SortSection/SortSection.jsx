import { useFilter } from "../../../../Context/FilterContext";
import InputTypeTwo from "../../../UI/Input/InputTypeTwo";

const SortSection = () => {
  const { state, dispatch } = useFilter();
  const { newest, lowTohHigh, highToLow } = state.bySort;

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
          dispatch({ type: "Newest", payload: "Newest" });
        }}
      />
      <InputTypeTwo
        inputWrapper="radio-input"
        type="radio"
        name="sort"
        checked={lowTohHigh}
        label="Price - Low to High"
        onChange={() => {
          dispatch({ type: "LowToHigh", payload: "LowToHigh" });
        }}
      />
      <InputTypeTwo
        inputWrapper="radio-input"
        type="radio"
        name="sort"
        checked={highToLow}
        label="Price - High to Low"
        onChange={() => {
          dispatch({ type: "HighToLow", payload: "HighToLow" });
        }}
      />
    </div>
  );
};

export default SortSection;
