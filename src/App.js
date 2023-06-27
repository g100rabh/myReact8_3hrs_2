import { useState } from "react";
import "./App.css";
import AvailableMedicine from "./Components/AvailableMed/AvailableMedicine";
import Cart from "./Components/Cart/Cart";
import InventryForm from "./Components/ItemAddForm/InventryForm";
import Header from "./Components/Layout/Header";
import AvailableProvider from "./store/AvailableProvider";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      <AvailableProvider>
        {showCart && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <InventryForm />
        <AvailableMedicine />
      </AvailableProvider>
    </CartProvider>
  );
}

export default App;
