import React, { useState } from "react";

import AvailableContext from "./available-context";

const AvailableProvider = props => {
    
    const [medList, setMedList] =  useState([]);
    const addItemHandler = (med) => {

        setMedList([...medList, med])
    }

    const availableContext = {
        medList: medList,
        addItem: addItemHandler,
        // removeItem: removeItemHandler,
        // quantityChange: newQuantityHandler
    }
    return <AvailableContext.Provider value={availableContext}>
        {props.children}
    </AvailableContext.Provider>
}

export default AvailableProvider;