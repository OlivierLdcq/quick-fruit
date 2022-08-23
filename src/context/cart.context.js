import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  numberOfItems: 0,
  setNumberOfItems: () => {},
  cartOpen: false,
  setCartOpen: () => {},
  handleAddItemToCart: () => {},
  handleRemoveItemFromCart: () => {},
  deleteElementFromCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const calculateNumberOfItems = (numberOfItems) => {
    let number = cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    setNumberOfItems(number);
  };
  useEffect(() => {
    calculateNumberOfItems(cartItems);
    console.log(cartItems);
  }, [cartItems]);

  const handleAddItemToCart = (cartItems, object) => {
    const existingItem = cartItems.find((item) => item.id === object.id);
    if (existingItem) {
      const updatedList = cartItems.map((item) => {
        if (item.id === existingItem.id) {
          return { ...item, quantity: existingItem.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartItems(updatedList);
    } else {
      return setCartItems([...cartItems, { ...object, quantity: 1 }]);
    }
    // if not we add the object to the cartItems liste en créant une clé "quantity" avec une valeur de 1
    // si item existe déjà on incrémente la valeur "quantity" qui a été créée auparavant
  };

  const deleteElementFromCart = (cartItems, object) => {
    const existingItem = cartItems.find((item) => item.id === object.id);
    const updatedArray = cartItems.filter((item) => {
      return item.id !== existingItem.id;
    });
    setCartItems(updatedArray);
  };

  const handleRemoveItemFromCart = (cartItems, object) => {
    console.log("hey");
    const existingItem = cartItems.find((item) => item.id === object.id);
    if (existingItem.quantity === 1) {
      const updatedArray = cartItems.filter((item) => {
        return item.id !== existingItem.id;
      });
      return setCartItems(updatedArray);
    }
    const updatedArray = cartItems.map((item) => {
      if (item.id === existingItem.id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    setCartItems(updatedArray);
  };
  const value = {
    cartItems,
    setCartItems,
    numberOfItems,
    setNumberOfItems,
    cartOpen,
    setCartOpen,
    handleAddItemToCart,
    handleRemoveItemFromCart,
    deleteElementFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
