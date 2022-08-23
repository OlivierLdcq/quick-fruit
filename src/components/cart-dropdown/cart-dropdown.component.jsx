import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import "./cart-dropdown.style.scss";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdow-container">
      <div className="cart-dropdown-items-display">
        {cartItems.map((item) => {
          const { itemTitle, price, imageUrl, description, quantity, id } =
            item;
          return (
            <div className="cart-dropdown-item" key={id}>
              {" "}
              <div className="cart-dropdown-image-wraper">
                <img src={imageUrl} style={{ height: "100px" }} />
              </div>
              <div className="cart-dropdown-item-text">
                <h3>{itemTitle}</h3>
                <p>{`${quantity} X ${price}$`}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="checkout-button-wrapper">
        <Button buttonType="inverted" onClick={() => navigate("cart")}>
          GO TO CART
        </Button>
      </div>
    </div>
  );
};

export default CartDropdown;
