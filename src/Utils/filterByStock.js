const filterByStock = (filteredArray, state) => {
  let withoutFiltered = [...filteredArray];
  let tempArray = [];
  if (state.byStock) {
    return withoutFiltered;
  } else {
    tempArray.push(...withoutFiltered.filter((prod) => prod.inStock));
  }

  return tempArray;
};
export { filterByStock };
