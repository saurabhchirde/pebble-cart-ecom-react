const sortByRating = (sortedArray, state) => {
  let withoutSorted = [...sortedArray];
  let filteredArray = [];

  if (
    state.byRating.oneStar === false &&
    state.byRating.twoStar === false &&
    state.byRating.threeStar === false &&
    state.byRating.fourStar === false
  ) {
    return sortedArray;
  }

  if (state.byRating.oneStar) {
    filteredArray = withoutSorted.filter((prod) => prod.rating >= 1);
  }
  if (state.byRating.twoStar) {
    filteredArray = withoutSorted.filter((prod) => prod.rating >= 2);
  }
  if (state.byRating.threeStar) {
    filteredArray = withoutSorted.filter((prod) => prod.rating >= 3);
  }
  if (state.byRating.fourStar) {
    filteredArray = withoutSorted.filter((prod) => prod.rating >= 4);
  }

  // console.log(filteredArray);
  return filteredArray;
};

export { sortByRating };
