const sortByPrice = (sortedArray, state) => {
  let withoutSort = [...sortedArray];
  let filteredArray = [];

  // sort by price
  if (
    state.bySort.newest === false &&
    state.bySort.lowTohHigh === false &&
    state.bySort.highToLow === false
  ) {
    return withoutSort;
  }

  if (state.bySort.newest) {
    filteredArray = withoutSort.sort((a, b) =>
      a.newestArrival === b.newestArrival ? 0 : a.newestArrival ? -1 : 1
    );
  }
  if (state.bySort.lowTohHigh) {
    filteredArray = withoutSort.sort((a, b) => a.price - b.price);
  }

  if (state.bySort.highToLow) {
    filteredArray = withoutSort.sort((a, b) => b.price - a.price);
  }

  // clear all filters
  if (state.sort === "Clear" || state.sort === "AllCategory") {
    filteredArray = [...sortedArray];
  }

  return filteredArray;
};

export { sortByPrice };
