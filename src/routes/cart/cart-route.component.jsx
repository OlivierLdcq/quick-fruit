import React, { useContext } from "react";
import CartBigCard from "../../components/cart-big-card/cart-big-card.component";
import { CartContext } from "../../context/cart.context";
import "./cart-route.style.scss";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div>
      {cartItems.map((item) => (
        <CartBigCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart;
