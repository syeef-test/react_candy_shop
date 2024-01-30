import React, { useContext } from "react";
import Modal from "react-modal";

const CartModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Cart Modal"
    >
      <h2>Cart Items</h2>

      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default CartModal;
