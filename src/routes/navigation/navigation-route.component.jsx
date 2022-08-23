import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import "./navigation-route.style.scss";
import { handleSignOut } from "../../utils/firebase";
import { CartContext } from "../../context/cart.context";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { NavigationIcon, NavigationLink } from "./navigation-route.style";
const Navigation = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { numberOfItems, cartOpen, setCartOpen } = useContext(CartContext);
  const handleCartClick = () => {
    setCartOpen(!cartOpen);
  };
  return (
    <>
      <div className="navigation-container">
        <NavigationIcon onClick={() => navigate("home")} />
        <div className="navigation-links-container">
          <NavigationLink to="shop" bgColor="blue">
            SHOP
          </NavigationLink>
          <NavigationLink to="our-story">OUR STORY</NavigationLink>

          {currentUser ? (
            <NavigationLink to="home">SIGNOUT</NavigationLink>
          ) : (
            <NavigationLink to="authentification">SIGNIN</NavigationLink>
          )}
          <div className="cart-icon-wraper" onClick={handleCartClick}>
            {" "}
            <p>{numberOfItems}</p>
            {cartOpen && numberOfItems > 0 && <CartDropdown />}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
