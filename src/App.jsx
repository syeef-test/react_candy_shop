import { useState, useContext, useEffect } from "react";
import "./App.css";
import AddCandy from "./components/AddCandy";
import CandyList from "./components/CandyList";
import CandyContextProvider from "./store/CandyContextProvider";
import CartModal from "./components/UI/CartModal";
import CartProvider from "./store/CartProvider";
import CartContext from "./store/cart-context";
import Header from "./components/UI/Header";

function App() {
  const cartContext = useContext(CartContext);

  // const totalQuantity = cartContext.items.reduce((curQuantity, item) => {
  //   return curQuantity + Number(item.quantity);
  // }, 0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h2>Candy Shop</h2>

      <CartProvider>
        <CandyContextProvider>
          <Header openModal={openModal} />
          {/* <button onClick={openModal}>Open Cart </button> */}
          <AddCandy />
          <CandyList />
          <CartModal isOpen={isModalOpen} closeModal={closeModal} />
        </CandyContextProvider>
      </CartProvider>
    </>
  );
}

export default App;
