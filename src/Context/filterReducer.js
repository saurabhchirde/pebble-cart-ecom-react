import { allProductList } from "../Data/productList/allProductList";

const filterReducer = (state, action) => {
  switch (action.type) {
    //   category
    case "AllCategory":
      return {
        ...state,
        byCategory: {
          allCategory: !state.byCategory.allCategory,
          camera: false,
          lenses: false,
          tripod: false,
          accessories: false,
        },
        sort: action.payload,
      };
    case "Camera":
      return {
        ...state,
        byCategory: {
          ...state.byCategory,
          allCategory: false,
          camera: !state.byCategory.camera,
        },
        sort: action.payload,
      };

    case "Lenses":
      return {
        ...state,
        byCategory: {
          ...state.byCategory,
          allCategory: false,
          lenses: !state.byCategory.lenses,
        },
        sort: action.payload,
      };

    case "Tripods":
      return {
        ...state,
        byCategory: {
          ...state.byCategory,
          allCategory: false,
          tripod: !state.byCategory.tripod,
        },
        sort: action.payload,
      };

    case "Accessories":
      return {
        ...state,
        byCategory: {
          ...state.byCategory,
          allCategory: false,
          accessories: !state.byCategory.accessories,
        },
        sort: action.payload,
      };

    //   brand
    case "AllBrand":
      return {
        ...state,
        byBrand: {
          allBrand: !state.byBrand.allBrand,
          canon: false,
          nikon: false,
          sony: false,
        },
        sort: action.payload,
      };

    case "Canon":
      return {
        ...state,
        byBrand: {
          ...state.byBrand,
          allBrand: false,
          canon: !state.byBrand.canon,
        },
        sort: action.payload,
      };

    case "Nikon":
      return {
        ...state,
        byBrand: {
          ...state.byBrand,
          allBrand: false,
          nikon: !state.byBrand.nikon,
        },
        sort: action.payload,
      };

    case "Sony":
      return {
        ...state,
        byBrand: {
          ...state.byBrand,
          allBrand: false,
          sony: !state.byBrand.sony,
        },
        sort: action.payload,
      };

    //   ratings
    case "4+":
      return {
        ...state,
        byRating: {
          oneStar: false,
          twoStar: false,
          threeStar: false,
          fourStar: true,
        },
        sort: action.payload,
      };

    case "3+":
      return {
        ...state,
        byRating: {
          oneStar: false,
          twoStar: false,
          threeStar: true,
          fourStar: false,
        },
        sort: action.payload,
      };

    case "2+":
      return {
        ...state,
        byRating: {
          oneStar: false,
          twoStar: true,
          threeStar: false,
          fourStar: false,
        },
        sort: action.payload,
      };

    case "1+":
      return {
        ...state,
        byRating: {
          oneStar: true,
          twoStar: false,
          threeStar: false,
          fourStar: false,
        },
        sort: action.payload,
      };

    //   sort
    case "Newest":
      return {
        ...state,
        bySort: { newest: true, lowTohHigh: false, highToLow: false },
        sort: action.payload,
      };

    case "LowToHigh":
      return {
        ...state,
        bySort: { newest: false, lowTohHigh: true, highToLow: false },
        sort: action.payload,
      };

    case "HighToLow":
      return {
        ...state,
        bySort: { newest: false, lowTohHigh: false, highToLow: true },
        sort: action.payload,
      };

    case "IncludeOutOfStock":
      return {
        ...state,
        byStock: !state.byStock,
        sort: action.payload,
      };

    case "Clear":
      return {
        products: allProductList,
        sort: "Newest",
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

    default:
      return state;
  }
};

export { filterReducer };
