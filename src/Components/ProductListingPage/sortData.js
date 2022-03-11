const sortData = (allProductList, sort) => {
  let priceSortedData = [...allProductList];

  if (sort === "Newest") {
    priceSortedData = priceSortedData.sort((a, b) =>
      a.newestArrival === b.newestArrival ? 0 : a.newestArrival ? -1 : 1
    );
  } else if (sort === "LowToHigh") {
    priceSortedData = priceSortedData.sort((a, b) => a.price - b.price);
  } else if (sort === "HighToLow") {
    priceSortedData = priceSortedData.sort((a, b) => b.price - a.price);
  } else if (sort === "Clear") {
    priceSortedData = [...allProductList];
  }

  return priceSortedData;
};

export { sortData };
