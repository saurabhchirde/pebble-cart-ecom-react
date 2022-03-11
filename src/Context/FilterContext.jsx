import { createContext, useContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    //   sort
    case "Newest":
      return {
        ...state,
        sort: action.payload,
      };

    case "LowToHigh":
      return {
        ...state,
        sort: action.payload,
      };

    case "HighToLow":
      return {
        ...state,
        sort: action.payload,
      };

    case "Clear":
      return { sort: "", byStock: false, byRating: 0, bySearch: "" };

    default:
      return state;
  }
};

const filterContext = createContext({
  sort: "",
  byStock: false,
  byRating: 0,
  bySearch: "",
});

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    sort: "",
    byStock: false,
    byRating: 0,
    bySearch: "",
  });
  return (
    <filterContext.Provider value={{ state, dispatch }}>
      {children}
    </filterContext.Provider>
  );
};

const useFilter = () => useContext(filterContext);

export { FilterProvider, useFilter };
