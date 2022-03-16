import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const productContext = createContext([]);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getproducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getproducts();
  }, []);

  return (
    <productContext.Provider value={{ products }}>
      {children}
    </productContext.Provider>
  );
};

const useProductProvider = () => useContext(productContext);

export { ProductProvider, useProductProvider };
