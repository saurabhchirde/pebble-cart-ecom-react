import { allProductList } from "../Data/productList/allProductList";

const filterReducer = (state, action) => {
  switch (action.type) {
    //   category

    case "Camera":
      return {
        ...state,
        sort: action.payload,
      };

    case "Lenses":
      return {
        ...state,
        sort: action.payload,
      };

    case "Tripods":
      return {
        ...state,
        sort: action.payload,
      };

    case "Accessories":
      return {
        ...state,
        sort: action.payload,
      };

    //   brand
    case "Canon":
      return {
        ...state,
        sort: action.payload,
      };

    case "Nikon":
      return {
        ...state,
        sort: action.payload,
      };

    case "Sony":
      return {
        ...state,
        sort: action.payload,
      };

    //   ratings
    case "4+":
      return {
        ...state,
        sort: action.payload,
      };

    case "3+":
      return {
        ...state,
        sort: action.payload,
      };

    case "2+":
      return {
        ...state,
        sort: action.payload,
      };

    case "1+":
      return {
        ...state,
        sort: action.payload,
      };

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

    case "IncludeOutOfStock":
      return {
        ...state,
        byStock: !state.byStock,
        sort: action.payload,
      };

    case "Clear" || "AllCategory":
      return {
        products: allProductList,
        sort: "",
        byStock: false,
        byRating: 0,
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

    default:
      return state;
  }
};

export { filterReducer };
