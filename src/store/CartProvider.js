import React, { useState } from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemHandler = (item) => {
    updateItems([...items, item]);
  };

  const removeCartItemHandler = (id) => {
    const eleForCart = items.filter((element) => element.ID !== id);
    updateItems([...eleForCart]);
  };

  const newQuantityHandler = (ele, newQua, index) => {
    let copy = [...items];
    if (index) {
        // console.log(copy[Number(index)])
      copy[Number(index)].quantity = copy[Number(index)].quantity + Number(newQua);
    } else {
      const indexOfEle = items.findIndex((element) => element.ID === ele.id);
      // console.log(copy[indexOfEle].quantity);
      copy[indexOfEle].quantity = copy[indexOfEle].quantity + newQua;
      if (copy[indexOfEle].quantity === 0) {
        copy = copy.filter((element) => element.ID !== ele.id);
      }
    }

    updateItems(copy);
  };

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemHandler,
    removeCartItem: removeCartItemHandler,
    quantityChange: newQuantityHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
