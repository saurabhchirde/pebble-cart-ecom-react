import { createContext, useContext, useReducer } from "react";
import { allProductList } from "../Data/productList/allProductList";

const filterContext = createContext(null);

const reducer = (state, action) => {
  //   console.log(state);
  switch (action.type) {
    //   category
    case "Camera":
      return;

    case "Lenses":
      return;

    case "Tripods":
      return;

    case "Accessories":
      return;

    //   brand
    case "Canon":
      return;

    case "Nikon":
      return;

    case "Sony":
      return;

    //   ratings
    case "4+":
      console.log(state.products.filter((item) => item.rating > 4));
    //   return {
    //     ...state,
    //     products: state.products.filter((item) => item.rating > 4),
    //   };
    case "3+":
      console.log(state.products.filter((item) => item.rating > 3));
    //   return {
    //     ...state,
    //     products: state.products.sort((a, b) => a.price - b.price),
    //   };

    case "2+":
      console.log(state.products.filter((item) => item.rating > 2));
    //   return {
    //     ...state,
    //     products: state.products.sort((a, b) => a.price - b.price),
    //   };

    case "1+":
      console.log(state.products.filter((item) => item.rating > 1));
    //   return {
    //     ...state,
    //     products: state.products.sort((a, b) => a.price - b.price),
    //   };

    //   sort
    case "Newest":
      return {
        ...state,
        products: state.products.sort((a, b) =>
          a.newestArrival === b.newestArrival ? 0 : a.newestArrival ? -1 : 1
        ),
      };

    case "LowToHigh":
      return {
        ...state,
        products: state.products.sort((a, b) => a.price - b.price),
      };

    case "HighToLow":
      return {
        ...state,
        products: state.products.sort((a, b) => b.price - a.price),
      };

    case "IncludeOutOfStock":
      return;

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
