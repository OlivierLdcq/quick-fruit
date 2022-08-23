import React, { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ShopFullCategory from "../../components/shop-full-category/shop-full-category.component";
import ShopPreview from "../../components/shop-preview/shop-preview.component";
import { ProductsContext } from "../../context/products.context";
import "./shop-route.style.scss";
const Shop = () => {
  return (
    <div className="shop-route-container">
      <Routes>
        <Route index element={<ShopPreview />} />
        <Route path=":category" element={<ShopFullCategory />} />
      </Routes>
    </div>
  );
};

export default Shop;
