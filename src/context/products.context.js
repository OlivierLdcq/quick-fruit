import { createContext, useEffect, useState } from "react";
import { ProductsListData } from "../data/productsList.js";
import {
  getProductsListFromDataBase,
  sendMyProductsListDataIntoFireBase,
} from "../utils/firebase.js";
export const ProductsContext = createContext({
  productsList: [],
  setProductsList: () => {},
});

export const ProductsContextProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    getProductsListFromDataBase(productsList, setProductsList);
  }, []);
  const value = { productsList, setProductsList };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
