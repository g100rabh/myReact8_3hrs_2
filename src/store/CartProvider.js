import React, { useState } from "react";

import CartContext from "./cart-context";

const CartProvider = props => {
    const [items, updateItems] = useState([]);

    const addItemHandler = (item) => {
        updateItems([...items,item])
    };

    const removeCartItemHandler = (id) => {

    };

    const newQuantityHandler = (ele, newQua) => {

    }

    const cartContext = {
        items: items,
        totalAmount: 0,
        addItem: addItemHandler,
        removeCartItem: removeCartItemHandler,
        quantityChange: newQuantityHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;