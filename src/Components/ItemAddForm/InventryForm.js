import React, { useContext } from "react";

import classes from "./InventryForm.module.css";
import Input from "../../UI/Input";
import AvailableContext from "../../store/available-context";

const InventryForm = (props) => {
  const availableCtx =  useContext(AvailableContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const medId = document.getElementById('ID').value;
    const medName = document.getElementById('medName').value;
    const medDes = document.getElementById('medDes').value;
    const medPrice = document.getElementById('medPrice').value;
    availableCtx.addItem({ID: medId, Name: medName, price: Number(medPrice), Des: medDes})
  } 



  return (
    <form onSubmit={submitHandler}>
      <Input
        label="Medicine ID:"
        input={{
          id: "ID",
          type: "number",
        }}
      />
      <Input
        label="Medicine Name: "
        input={{
          id: "medName",
          type: "text",
        }}
      />
      <Input
        label="Medicine Description: "
        input={{
          id: "medDes",
          type: "text",
        }}
      />
      <Input
        label="Price: "
        input={{
          id: "medPrice",
          type: "Number",
        }}
      />
      <button>Add Product</button>
    </form>
  );
};

export default InventryForm;
