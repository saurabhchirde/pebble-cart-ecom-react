const sortByCategory = (sortedArray, state) => {
  let withoutSort = [...sortedArray];
  let filteredArray = [];

  // sort by category
  if (
    state.byCategory.allCategory === false &&
    state.byCategory.camera === false &&
    state.byCategory.lenses === false &&
    state.byCategory.tripod === false &&
    state.byCategory.accessories === false
  )
    return withoutSort;

  if (state.byCategory.allCategory) {
    return withoutSort;
  }

  if (state.byCategory.camera) {
    filteredArray.push(
      ...withoutSort.filter((prod) => prod.category === "camera")
    );
  }

  if (state.byCategory.lenses) {
    filteredArray.push(
      ...withoutSort.filter((prod) => prod.category === "lens")
    );
  }

  if (state.byCategory.tripod) {
    filteredArray.push(
      ...withoutSort.filter((prod) => prod.category === "tripod")
    );
  }

  if (state.byCategory.accessories) {
    filteredArray.push(
      ...withoutSort.filter((prod) => prod.category === "accessories")
    );
  }

  return filteredArray;
};
export { sortByCategory };
