import { useState, useContext } from "react";
import "./App.css";
import AddCandy from "./components/AddCandy";
import CandyList from "./components/CandyList";
import CandyContextProvider from "./store/CandyContextProvider";
import CartModal from "./components/UI/CartModal";

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
      <button onClick={openModal}>Open Cart</button>
      <CandyContextProvider>
        <AddCandy />
        <CandyList />
        <CartModal isOpen={isModalOpen} closeModal={closeModal} />
      </CandyContextProvider>
    </>
  );
}

export default App;
