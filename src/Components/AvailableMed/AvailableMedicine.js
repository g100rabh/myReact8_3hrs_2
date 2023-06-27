
import React, { useContext } from "react";
import AvailableContext from "../../store/available-context";
import CartContext from "../../store/cart-context";
import Input from "../../UI/Input";
import classes from "./AvailableMedicine.module.css";

const AvailableMedicine = (props) => {
  const medCtx = useContext(AvailableContext).medList;
    const cartCtx = useContext(CartContext);
    
    console.log(cartCtx)
    const clickHandler = (event) => {
        event.preventDefault();
        const eleId = event.target.parentElement.id;
        const eleForCart = medCtx.filter((element) => element.ID === eleId)[0];
        // console.log(eleForCart);
        const quantity = document.getElementById('quantity').value;
        // console.log(quantity)
        const index = cartCtx.items.findIndex(element => element.ID === eleId)
        console.log(eleForCart.ID, index)
        if(index !== -1){
            console.log(eleForCart.ID)
            cartCtx.quantityChange(eleForCart, quantity, `${index}`);
        } else {
            cartCtx.addItem({...eleForCart, quantity: Number(quantity)});
        }
        
    }

  const medList = medCtx.map((med) => (
    <li className={classes.med} id={med.ID}>
      <div>
        <span>{med.ID}</span>
        <span>{med.Name}</span>
        <span>{med.Des}</span>
        <span>{med.price}</span>
        
      </div>
      <form className={classes.form} onSubmit={clickHandler} id={med.ID}>
        <Input input={{ id:'quantity', type: "number", defaultValue: '1' }} />
        <button >Add To Cart</button>
      </form>
    </li>
  ));
  return <ul>{medList}</ul>;
};

export default AvailableMedicine;
