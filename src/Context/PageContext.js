import { createContext, useContext, useReducer } from "react";

const pageContext = createContext({
  landingPage: true,
  productListingPage: false,
  cartPage: false,
  wishlistPage: false,
});

const reducer = (state, action) => {
  switch (action.type) {
    case "landingPage":
      return {
        landingPage: true,
        productListingPage: false,
        cartPage: false,
        wishlistPage: false,
      };
    case "productListingPage":
      return {
        landingPage: false,
        productListingPage: true,
        cartPage: false,
        wishlistPage: false,
      };
    case "cartPage":
      return {
        landingPage: false,
        productListingPage: false,
        cartPage: true,
        wishlistPage: false,
      };
    case "wishListPage":
      return {
        landingPage: false,
        productListingPage: false,
        cartPage: false,
        wishlistPage: true,
      };
  }
};

const PageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    landingPage: true,
    productListingPage: false,
    cartPage: false,
    wishlistPage: false,
  });
  return (
    <pageContext.Provider value={{ state, dispatch }}>
      {children}
    </pageContext.Provider>
  );
};

const usePageProvider = () => useContext(pageContext);

export { PageProvider, usePageProvider };
