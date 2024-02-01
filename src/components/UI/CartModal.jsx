import React, { useContext, useEffect, useState } from "react";

import Modal from "react-modal";
import CartContext from "../../store/cart-context";
import CandyContext from "../../store/candy-context";

const CartModal = ({ isOpen, closeModal }) => {
  const cartContext = useContext(CartContext);
  const candyContext = useContext(CandyContext);
  const [totalAmount, setTotalAmount] = useState(0);

  const totalQuantity = cartContext.items.reduce((curQuantity, item) => {
    return curQuantity + Number(item.quantity);
  }, 0);

  useEffect(() => {
    const calculateTotalAmount = () => {
      const newTotalAmount = cartContext.items.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      setTotalAmount(newTotalAmount.toFixed(2));
    };

    calculateTotalAmount();
  }, [cartContext.items]);

  const handleIncreaseQuantity = (item) => {
    //cartContext.addItemByOne(item);

    // const existingItemIndex = candyContext.items.findIndex(
    //   (item) => item.candy_name === newItem.candy_name
    // );

    // const candy_quantity = candyContext.items[existingItemIndex].quantity;
    // alert(candy_quantity);
    cartContext.addItem(item, 1);
    candyContext.removeItem(item, 1);
  };

  const handleDecreaseQuantity = (item) => {
    cartContext.removeItem(item);
    candyContext.addItem(item, 1);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Cart Modal"
    >
      <h2>Cart Items:</h2>
      <ul>
        {cartContext.items.map((item) => (
          <li key={item.id}>
            {item.candy_name} - Quantity: {item.quantity} - Price:{item.price}
            <button onClick={() => handleIncreaseQuantity(item)}>
              Increase
            </button>
            <button onClick={() => handleDecreaseQuantity(item)}>
              Decrease
            </button>
          </li>
        ))}
      </ul>
      <div>
        <span>Total Amount:</span>
        <span>{totalAmount}</span>
        <br />
        <span>Total Cart Items:{totalQuantity}</span>
      </div>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default CartModal;
