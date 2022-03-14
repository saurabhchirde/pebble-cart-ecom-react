import { sortByBrand } from "./BrandSection/sortByBrand";
import { sortByCategory } from "./CategorySection/sortByCategory";
import { sortByStock } from "./IncludeOutOfStock/sortByStock";
import { sortByRating } from "./RatingSection/sortByRating";
import { sortByPrice } from "./SortSection/sortByPrice";

const finalSortedData = (state) => {
  // all sorting functions
  let sortedArray = [...state.products];

  sortedArray = sortByStock(sortedArray, state);
  sortedArray = sortByCategory(sortedArray, state);
  sortedArray = sortByBrand(sortedArray, state);
  sortedArray = sortByRating(sortedArray, state);
  sortedArray = sortByPrice(sortedArray, state);

  if (sortedArray.length === 0) {
    state.unAvailable = true;
  } else {
    state.unAvailable = false;
  }

  return sortedArray;
};

export { finalSortedData };
