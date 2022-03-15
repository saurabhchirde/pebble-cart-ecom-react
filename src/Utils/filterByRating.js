const filterByRating = (filteredArray, state) => {
  let withoutFiltered = [...filteredArray];
  let tempArray = [];

  if (
    state.byRating.oneStar === false &&
    state.byRating.twoStar === false &&
    state.byRating.threeStar === false &&
    state.byRating.fourStar === false
  ) {
    return filteredArray;
  }

  if (state.byRating.oneStar) {
    tempArray = withoutFiltered.filter((prod) => prod.rating >= 1);
  }
  if (state.byRating.twoStar) {
    tempArray = withoutFiltered.filter((prod) => prod.rating >= 2);
  }
  if (state.byRating.threeStar) {
    tempArray = withoutFiltered.filter((prod) => prod.rating >= 3);
  }
  if (state.byRating.fourStar) {
    tempArray = withoutFiltered.filter((prod) => prod.rating >= 4);
  }

  // console.log(tempArray);
  return tempArray;
};

export { filterByRating };
