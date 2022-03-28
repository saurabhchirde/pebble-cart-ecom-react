import { createContext, useContext, useReducer, useState } from "react";
import { filterReducer } from "./filterReducer";

const filterInitialState = {
  sort: "",
  bySort: { newest: true, lowTohHigh: false, highToLow: false },
  byStock: false,
  byRating: {
    oneStar: true,
    twoStar: false,
    threeStar: false,
    fourStar: false,
  },
  bySearch: "",
  byCategory: {
    allCategory: true,
    camera: false,
    lenses: false,
    tripod: false,
    accessories: false,
  },
  byBrand: { allBrand: true, canon: false, nikon: false, sony: false },
};

const filterContext = createContext(filterInitialState);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    filterInitialState
  );
  const [searchInput, setSearchInput] = useState("");

  return (
    <filterContext.Provider
      value={{ filterState, filterDispatch, searchInput, setSearchInput }}
    >
      {children}
    </filterContext.Provider>
  );
};

const useFilter = () => useContext(filterContext);

export { FilterProvider, useFilter };
