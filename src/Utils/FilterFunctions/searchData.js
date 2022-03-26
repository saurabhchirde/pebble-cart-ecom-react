const searchData = (filteredArray, state) => {
  let withoutSearch = [...filteredArray];
  let tempArray = [];
  if (state.bySearch === "") {
    return withoutSearch;
  } else {
    tempArray.push(
      ...withoutSearch.filter((prod) =>
        prod.title.toLowerCase().includes(state.bySearch.toLowerCase())
      )
    );
  }
  return tempArray;
};

export { searchData };
