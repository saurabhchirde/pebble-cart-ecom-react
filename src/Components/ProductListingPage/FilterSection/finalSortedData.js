import { sortByBrand } from "./BrandSection/sortByBrand";
import { sortByCategory } from "./CategorySection/sortByCategory";
import { sortByStock } from "./IncludeOutOfStock/sortByStock";
import { sortByRating } from "./RatingSection/sortByRating";
import { sortByPrice } from "./SortSection/sortByPrice";

const finalSortedData = (state) => {
  // all sorting functions
  let sortedArray = [...state.products];

  sortedArray = sortByPrice(sortedArray, state);
  sortedArray = sortByStock(sortedArray, state);
  sortedArray = sortByCategory(sortedArray, state);
  sortedArray = sortByBrand(sortedArray, state);
  sortedArray = sortByRating(sortedArray, state);

  return sortedArray;
};

export { finalSortedData };
