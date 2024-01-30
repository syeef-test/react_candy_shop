import { useState, useContext } from "react";
import "./App.css";
import AddCandy from "./components/AddCandy";
import CandyList from "./components/CandyList";
import CandyContextProvider from "./store/CandyContextProvider";
import CartModal from "./components/UI/CartModal";
import CartProvider from "./store/CartProvider";

function App() {
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
        <button onClick={openModal}>Open Cart</button>
        <CandyContextProvider>
          <AddCandy />
          <CandyList />
          <CartModal isOpen={isModalOpen} closeModal={closeModal} />
        </CandyContextProvider>
      </CartProvider>
    </>
  );
}

export default App;
