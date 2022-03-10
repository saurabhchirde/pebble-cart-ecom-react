import { createContext, useContext, useReducer } from "react";
import { allProductList } from "../Data/productList/allProductList";
import { sortByPrice } from "../Components/ProductListingPage/FilterSection/SortSection/sortByPrice";

const filterContext = createContext(null);

const reducer = (state, action) => {
  //   console.log(state);
  switch (action.type) {
    //   sort
    case "Newest":
      return {
        products: sortByPrice(state.products, "Newest"),
      };

    case "LowToHigh":
      return {
        products: sortByPrice(state.products, "LowToHigh"),
      };

    case "HighToLow":
      return {
        products: sortByPrice(state.products, "HighToLow"),
      };

    default:
      return state;
  }
};

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: allProductList,
  });
  return (
    <filterContext.Provider value={{ state, dispatch }}>
      {children}
    </filterContext.Provider>
  );
};

const useFilter = () => useContext(filterContext);

export { FilterProvider, useFilter };
