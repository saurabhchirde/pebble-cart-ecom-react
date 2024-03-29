import axios from "axios";
import { AlertToast } from "Components";
import { createContext, useContext, useEffect, useReducer } from "react";

const productContext = createContext();

const productsReducer = (productState, action) => {
  switch (action.type) {
    case "getproducts":
      return {
        ...productState,
        products: action.payload,
      };
    case "getcategories":
      return {
        ...productState,
        categories: action.payload,
      };
    case "getbrands":
      return {
        ...productState,
        brands: action.payload,
      };
    default:
      return productState;
  }
};

const ProductsProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(productsReducer, {
    products: [],
    categories: [],
    brands: [],
  });

  useEffect(() => {
    const getproducts = async () => {
      try {
        const response = await axios.get("/api/products");
        productDispatch({
          type: "getproducts",
          payload: response.data.products,
        });
      } catch (error) {
        AlertToast("error", error.message);
      }
    };
    getproducts();
  }, []);

  useEffect(() => {
    const getcategory = async () => {
      try {
        const response = await axios.get("/api/categories");
        productDispatch({
          type: "getcategories",
          payload: response.data.categories,
        });
      } catch (error) {
        AlertToast("error", error.message);
      }
    };
    getcategory();
  }, []);

  useEffect(() => {
    const getbrands = async () => {
      try {
        const response = await axios.get("/api/brands");
        productDispatch({ type: "getbrands", payload: response.data.brands });
      } catch (error) {
        AlertToast("error", error.message);
      }
    };
    getbrands();
  }, []);

  return (
    <productContext.Provider value={{ productState, productDispatch }}>
      {children}
    </productContext.Provider>
  );
};

const useProductProvider = () => useContext(productContext);

export { ProductsProvider, useProductProvider };
