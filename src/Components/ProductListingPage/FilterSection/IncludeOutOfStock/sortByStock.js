const sortByStock = (sortedArray, state) => {
  let withoutSorted = [...sortedArray];
  let filteredArray = [];

  if (state.byStock) {
    return withoutSorted;
  } else {
    filteredArray.push(...withoutSorted.filter((prod) => prod.inStock));
  }

  return filteredArray;
};
export { sortByStock };
