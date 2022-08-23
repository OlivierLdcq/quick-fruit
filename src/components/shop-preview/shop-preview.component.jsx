import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/products.context";
import CardItem from "../card-item/card-item.component";
const ShopPreview = () => {
  const { productsList } = useContext(ProductsContext);

  const productsListKeys = Object.keys(productsList);
  productsListKeys.reverse();
  const navigate = useNavigate();
  return (
    <div>
      {productsListKeys.map((item) => {
        const objectToDisplay = productsList[item];
        return (
          <div key={item}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h1>{item}</h1>{" "}
              <span className="back-to-list" onClick={() => navigate(item)}>
                VIEW ALL
              </span>
            </div>{" "}
            <div className="cart-items-grid-wrapper">
              {objectToDisplay.map((object, index) => {
                return (
                  index <= 1 && (
                    <CardItem object={object} title={item} key={object.id} />
                  )
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShopPreview;
