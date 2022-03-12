const sortByBrand = (sortedArray, state) => {
  let withoutSort = [...sortedArray];
  let filteredArray = [];

  if (
    state.byBrand.allBrand === false &&
    state.byBrand.canon === false &&
    state.byBrand.nikon === false &&
    state.byBrand.sony === false
  ) {
    return withoutSort;
  }

  if (state.byBrand.allBrand) {
    return withoutSort;
  }

  if (state.byBrand.canon) {
    filteredArray.push(
      ...withoutSort.filter((prod) => prod.brand.toLowerCase() === "canon")
    );
  }

  if (state.byBrand.nikon) {
    filteredArray.push(
      ...withoutSort.filter((prod) => prod.brand.toLowerCase() === "nikon")
    );
  }

  if (state.byBrand.sony) {
    filteredArray.push(
      ...withoutSort.filter((prod) => prod.brand.toLowerCase() === "sony")
    );
  }
  // console.log(filteredArray);
  return filteredArray;
};

export { sortByBrand };
