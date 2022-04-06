const searchData = (filteredArray, { bySearch }) => {
  let withoutSearch = [...filteredArray];

  let tempArray = [];
  if (bySearch === "") {
    return withoutSearch;
  } else {
    tempArray.push(
      ...withoutSearch.filter((prod) =>
        prod.title.toLowerCase().includes(bySearch.toLowerCase())
      )
    );
  }
  return tempArray;
};

export { searchData };
