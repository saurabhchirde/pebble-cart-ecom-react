import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "./filterReducer";
import { allProductList } from "../Data/productList/allProductList";

const filterContext = createContext({
  products: allProductList,
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
  unAvailable: false,
});

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    products: allProductList,
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
    unAvailable: false,
  });
  return (
    <filterContext.Provider value={{ state, dispatch }}>
      {children}
    </filterContext.Provider>
  );
};

const useFilter = () => useContext(filterContext);

export { FilterProvider, useFilter };
