import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import "./card-item.style.scss";

const CardItem = ({ object, title }) => {
  const { cartItems, setCartItems, handleAddItemToCart } =
    useContext(CartContext);
  const { id, itemTitle, price, description, imageUrl } = object;

  //paste here
  return (
    <div key={id} className="cart-item">
      {" "}
      <h2>{itemTitle}</h2>
      <div className="cart-img-button-container">
        <div
          className="cart-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          {" "}
        </div>
        <Button
          buttonType="inverted"
          onClick={() => handleAddItemToCart(cartItems, object)}
        >
          ADD TO CART
        </Button>
      </div>
      <div className="price-block">
        <p>price</p>
        <p className="price">{`${price} $`}</p>
      </div>
      <p style={{ fontStyle: "italic" }}>{description}</p>
    </div>
  );
};

export default CardItem;
