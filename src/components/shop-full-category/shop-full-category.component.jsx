import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/products.context";
import CardItem from "../card-item/card-item.component";
import "./shop-full-category.style.scss";
const ShopFullCategory = () => {
  const { category } = useParams();
  const { productsList } = useContext(ProductsContext);
  const navigate = useNavigate();
  console.log(category);
  console.log(productsList);
  const objectToDisplay = productsList[category];
  console.log(objectToDisplay);
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1>{`ALL ${category}`}</h1>{" "}
        <span className="back-to-list" onClick={() => navigate("../")}>
          &#x21e6; BACK TO LIST
        </span>
      </div>
      <div className="cart-items-grid-wrapper">
        {objectToDisplay.map((object, index) => {
          const { itemTitle, id } = object;
          return <CardItem object={object} title={itemTitle} key={id} />;
        })}
      </div>
    </div>
  );
};

export default ShopFullCategory;
