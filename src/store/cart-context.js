import React from "react";

const CartContext = React.createContext({
    items: [],
    addItem: (item) => {},
    removeCartItem: (id) => {},
    quantityChange: (ele) => {},
});

export default CartContext;