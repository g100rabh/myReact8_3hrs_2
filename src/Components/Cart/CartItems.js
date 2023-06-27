import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./CartItems.module.css";

const CartItems = () => {
  const cartCtx = useContext(CartContext);

  const deleteHandler = (event) => {
    const ele = event.target.parentElement.parentElement;
    // console.log(ele.id)
    cartCtx.removeCartItem(ele.id);
  };

  const increaseHandler = (event) => {
    const ele = event.target.parentElement.parentElement;
    cartCtx.quantityChange(ele, +1);
  };
  const reduceHandler = (event) => {
    const ele = event.target.parentElement.parentElement;
    cartCtx.quantityChange(ele, -1);
  };

  return (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((med) => (
        //   <li>{item.name}</li>
        <li id={med.ID} className={classes.item}>
          <div className={classes.details}>
            <span>{med.ID}</span>
            <span>{med.Name}</span>
            <span>{med.Des}</span>
            <span>{med.price}</span>
            <span>x{med.quantity}</span>
          </div>
        
          <div className={classes.input}>
            <button className={classes.reduce} onClick={reduceHandler}>
              -
            </button>
            <button className={classes.increase} onClick={increaseHandler}>
              +
            </button>
            <button className={classes.delete} onClick={deleteHandler}>
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartItems;
