import { filterByBrand } from "./filterByBrand";
import { filterByCategory } from "./filterByCategory";
import { filterByStock } from "./filterByStock";
import { filterByRating } from "./filterByRating";
import { sortByPrice } from "./sortByPrice";

const finalFilteredData = (products, state) => {
  let filteredArray = [...products];

  filteredArray = filterByStock(filteredArray, state);
  filteredArray = filterByCategory(filteredArray, state);
  filteredArray = filterByBrand(filteredArray, state);
  filteredArray = filterByRating(filteredArray, state);
  filteredArray = sortByPrice(filteredArray, state);

  return filteredArray;
};

export { finalFilteredData };
