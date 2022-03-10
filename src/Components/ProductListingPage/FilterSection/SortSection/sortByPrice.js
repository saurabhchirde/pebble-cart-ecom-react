const sortByPrice = (originalData, operation) => {
  let priceSortedData = originalData;
  if (operation === "Newest") {
    return priceSortedData.sort((a, b) =>
      a.newestArrival === b.newestArrival ? 0 : a.newestArrival ? -1 : 1
    );
  } else if (operation === "LowToHigh") {
    return priceSortedData.sort((a, b) => a.price - b.price);
  } else if (operation === "HighToLow") {
    return priceSortedData.sort((a, b) => b.price - a.price);
  }
};

export { sortByPrice };
