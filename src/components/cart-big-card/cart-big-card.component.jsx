import React, { useContext } from "react";
import "./cart-big-card.style.scss";
import {} from "../../utils/firebase.js";
import { CartContext } from "../../context/cart.context";
const CartBigCard = ({ item }) => {
  const {
    cartItems,
    setCartItems,
    handleAddItemToCart,
    handleRemoveItemFromCart,
    deleteElementFromCart,
  } = useContext(CartContext);

  console.log(item);
  const { id, itemTitle, quantity, imageUrl, description } = item;
  return (
    <div className="big-card-container">
      <div className="g1 gcf">
        <img src={imageUrl} />
      </div>
      <div className="g2 gcf">
        <h3>{itemTitle}</h3>
      </div>
      <div className="g3 gcf">
        <h3 onClick={() => handleRemoveItemFromCart(cartItems, item)}>
          &#x2190;
        </h3>
        <h3>{quantity}</h3>
        <h3 onClick={() => handleAddItemToCart(cartItems, item)}>&#x2192;</h3>
      </div>
      <div className="g4 gcf">
        <h3 onClick={() => deleteElementFromCart(cartItems, item)}>{`X`} </h3>
      </div>
    </div>
  );
};

export default CartBigCard;
