import React, { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);

    let q = 0;
    cartCtx.items.forEach((element) => {
        q += element.quantity
      });

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{q}</span>
    </button>
  );
};

export default HeaderCartButton;