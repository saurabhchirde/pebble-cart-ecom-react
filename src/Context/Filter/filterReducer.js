const filterReducer = (filterState, action) => {
  switch (action.type) {
    //   category

    case "Camera":
      return {
        ...filterState,
        byCategory: {
          ...filterState.byCategory,
          allCategory: false,
          camera: !filterState.byCategory.camera,
        },
        sort: action.payload,
      };

    case "Lenses":
      return {
        ...filterState,
        byCategory: {
          ...filterState.byCategory,
          allCategory: false,
          lenses: !filterState.byCategory.lenses,
        },
        sort: action.payload,
      };

    case "Tripods":
      return {
        ...filterState,
        byCategory: {
          ...filterState.byCategory,
          allCategory: false,
          tripod: !filterState.byCategory.tripod,
        },
        sort: action.payload,
      };

    case "Accessories":
      return {
        ...filterState,
        byCategory: {
          ...filterState.byCategory,
          allCategory: false,
          accessories: !filterState.byCategory.accessories,
        },
        sort: action.payload,
      };

    //   brand

    case "Canon":
      return {
        ...filterState,
        byBrand: {
          ...filterState.byBrand,
          allBrand: false,
          canon: !filterState.byBrand.canon,
        },
        sort: action.payload,
      };

    case "Nikon":
      return {
        ...filterState,
        byBrand: {
          ...filterState.byBrand,
          allBrand: false,
          nikon: !filterState.byBrand.nikon,
        },
        sort: action.payload,
      };

    case "Sony":
      return {
        ...filterState,
        byBrand: {
          ...filterState.byBrand,
          allBrand: false,
          sony: !filterState.byBrand.sony,
        },
        sort: action.payload,
      };

    //   ratings

    case "ratings":
      return {
        ...filterState,
        byRating: {
          oneStar: action.payload >= 1,
          twoStar: action.payload >= 2,
          threeStar: action.payload >= 3,
          fourStar: action.payload >= 4,
          fiveStar: action.payload >= 5,
        },
        sort: action.payload,
      };

    //   sort
    case "Newest":
      return {
        ...filterState,
        bySort: { newest: true, lowTohHigh: false, highToLow: false },
        sort: action.payload,
      };

    case "LowToHigh":
      return {
        ...filterState,
        bySort: { newest: false, lowTohHigh: true, highToLow: false },
        sort: action.payload,
      };

    case "HighToLow":
      return {
        ...filterState,
        bySort: { newest: false, lowTohHigh: false, highToLow: true },
        sort: action.payload,
      };

    case "IncludeOutOfStock":
      return {
        ...filterState,
        byStock: !filterState.byStock,
        sort: action.payload,
      };

    case "bySearch":
      return {
        ...filterState,
        bySearch: action.payload,
        sort: action.payload,
      };

    case "Clear":
      return {
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
      return filterState;
  }
};

export { filterReducer };
