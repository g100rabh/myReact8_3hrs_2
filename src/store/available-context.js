import React from 'react';

const AvailableContext = React.createContext({
    medList: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    quantityChange: (ele) => {},
});

export default AvailableContext;