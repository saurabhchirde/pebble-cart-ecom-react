const sortData = (allProductList, sort) => {
  let priceSortedData = [...allProductList.products];

  if (sort === "Newest") {
    priceSortedData = priceSortedData
      .sort((a, b) =>
        a.newestArrival === b.newestArrival ? 0 : a.newestArrival ? -1 : 1
      )
      .filter((prod) => prod.inStock);
  } else if (sort === "LowToHigh") {
    priceSortedData = priceSortedData
      .sort((a, b) => a.price - b.price)
      .filter((prod) => prod.inStock);
  } else if (sort === "HighToLow") {
    priceSortedData = priceSortedData
      .sort((a, b) => b.price - a.price)
      .filter((prod) => prod.inStock);
  } else if (sort === "Clear" || sort === "AllCategory") {
    priceSortedData = [...allProductList.products];
  } else if (sort === "Camera") {
    priceSortedData = priceSortedData
      .filter((prod) => prod.category === "camera")
      .filter((prod) => prod.inStock);
    // console.log(priceSortedData);
  } else if (sort === "Lenses") {
    priceSortedData = priceSortedData
      .filter((prod) => prod.category === "lens")
      .filter((prod) => prod.inStock);
  } else if (sort === "Tripods") {
    priceSortedData = priceSortedData
      .filter((prod) => (prod.category === "tripod" ? true : true))
      .filter((prod) => prod.inStock);
  } else if (sort === "Accessories") {
    priceSortedData = priceSortedData
      .filter((prod) => (prod.category === "accessories" ? true : true))
      .filter((prod) => prod.inStock);
  } else if (sort === "IncludeOutOfStock") {
    priceSortedData = [
      ...allProductList.products,
      priceSortedData.filter((prod) => !prod.inStock),
    ];
  } else {
    priceSortedData = [...allProductList.products].filter(
      (prod) => prod.inStock
    );
  }
  // console.log(priceSortedData);
  return priceSortedData;
};

export { sortData };
