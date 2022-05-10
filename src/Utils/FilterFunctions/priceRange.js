const priceRange = (filteredArray, state) => {
  let withoutFiltered = [...filteredArray];
  let tempArray = [];

  if (state.byPrice === "1") {
    tempArray = withoutFiltered.filter((prod) => prod.price >= 100);
  } else if (state.byPrice === "2") {
    tempArray = withoutFiltered.filter((prod) => prod.price >= 1000);
  } else if (state.byPrice === "3") {
    tempArray = withoutFiltered.filter((prod) => prod.price >= 10000);
  } else if (state.byPrice === "4") {
    tempArray = withoutFiltered.filter((prod) => prod.price >= 50000);
  } else {
    tempArray = withoutFiltered;
  }

  return tempArray;
};

export { priceRange };
