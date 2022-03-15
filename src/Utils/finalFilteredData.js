import { filterByBrand } from "./filterByBrand";
import { filterByCategory } from "./filterByCategory";
import { filterByStock } from "./filterByStock";
import { filterByRating } from "./filterByRating";
import { sortByPrice } from "./sortByPrice";

// const checkAvailability = (filteredArray, dispatch) => {
//   if (filteredArray.length === 0) {
//     dispatch({ type: "unAvailable" });
//     // state.unAvailable = true;
//   } else {
//     dispatch({ type: "available" });
//     // state.unAvailable = false;
//   }
// };

const finalFilteredData = (state, dispatch) => {
  let filteredArray = [...state.products];

  filteredArray = filterByStock(filteredArray, state);
  filteredArray = filterByCategory(filteredArray, state);
  filteredArray = filterByBrand(filteredArray, state);
  filteredArray = filterByRating(filteredArray, state);
  filteredArray = sortByPrice(filteredArray, state);

  return filteredArray;
};

export { finalFilteredData };
