const filterByCategory = (filteredArray, state) => {
  let withoutFiltered = [...filteredArray];
  let tempArray = [];

  if (
    state.byCategory.allCategory === false &&
    state.byCategory.camera === false &&
    state.byCategory.lenses === false &&
    state.byCategory.tripod === false &&
    state.byCategory.accessories === false
  )
    return withoutFiltered;

  if (state.byCategory.allCategory) {
    return withoutFiltered;
  }

  if (state.byCategory.camera) {
    tempArray.push(
      ...withoutFiltered.filter((prod) => prod.category === "camera")
    );
  }

  if (state.byCategory.lenses) {
    tempArray.push(
      ...withoutFiltered.filter((prod) => prod.category === "lens")
    );
  }

  if (state.byCategory.tripod) {
    tempArray.push(
      ...withoutFiltered.filter((prod) => prod.category === "tripod")
    );
  }

  if (state.byCategory.accessories) {
    tempArray.push(
      ...withoutFiltered.filter((prod) => prod.category === "accessories")
    );
  }

  return tempArray;
};

export { filterByCategory };
