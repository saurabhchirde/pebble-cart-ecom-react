const filterByBrand = (filteredArray, state) => {
  let withoutFiltered = [...filteredArray];
  let tempArray = [];

  if (
    state.byBrand.allBrand === false &&
    state.byBrand.canon === false &&
    state.byBrand.nikon === false &&
    state.byBrand.sony === false
  ) {
    return withoutFiltered;
  }

  if (state.byBrand.allBrand) {
    return withoutFiltered;
  }

  if (state.byBrand.canon) {
    tempArray.push(
      ...withoutFiltered.filter((prod) => prod.brand.toLowerCase() === "canon")
    );
  }

  if (state.byBrand.nikon) {
    tempArray.push(
      ...withoutFiltered.filter((prod) => prod.brand.toLowerCase() === "nikon")
    );
  }

  if (state.byBrand.sony) {
    tempArray.push(
      ...withoutFiltered.filter((prod) => prod.brand.toLowerCase() === "sony")
    );
  }
  // console.log(tempArray);
  return tempArray;
};

export { filterByBrand };
