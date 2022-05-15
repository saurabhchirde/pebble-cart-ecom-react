const sortByPrice = (filteredArray, state) => {
  let withoutSort = [...filteredArray];
  let tempArray = [];

  if (
    state.bySort.newest === false &&
    state.bySort.lowTohHigh === false &&
    state.bySort.highToLow === false
  ) {
    return withoutSort;
  }

  if (state.bySort.newest) {
    tempArray = withoutSort.sort((a, b) =>
      a.newestArrival === b.newestArrival ? 0 : a.newestArrival ? -1 : 1
    );
  }
  if (state.bySort.lowTohHigh) {
    tempArray = withoutSort.sort((a, b) => a.price - b.price);
  }

  if (state.bySort.highToLow) {
    tempArray = withoutSort.sort((a, b) => b.price - a.price);
  }

  // clear all filters
  if (state.sort === "Clear" || state.sort === "AllCategory") {
    tempArray = [...filteredArray];
  }

  return tempArray;
};

export { sortByPrice };
