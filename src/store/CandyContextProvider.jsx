import React, { useContext, useState, useEffect } from "react";
import CandyContext from "./candy-context";

const CandyContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (newItem, quantity) => {
    const existingItemIndex = items.findIndex(
      (item) => item.candy_name === newItem.candy_name
    );

    if (existingItemIndex !== -1) {
      let updatedCandy = [...items];
      updatedCandy[existingItemIndex].quantity =
        Number(updatedCandy[existingItemIndex].quantity) + Number(quantity);
      setItems(updatedCandy);
    } else {
      setItems((prevItems) => [
        ...prevItems,
        { ...newItem, quantity: quantity },
      ]);
    }
  };

  const removeItemHandler = (newItem, quantity) => {
    const prevCandyList = [...items];

    const existingItemIndex = prevCandyList.findIndex(
      (item) => item.candy_name === newItem.candy_name
    );

    if (existingItemIndex !== -1) {
      let updateQuantity = Number(prevCandyList[existingItemIndex].quantity);
      if (updateQuantity > 0) {
        updateQuantity = updateQuantity - quantity;
        const updatedCandy = [...prevCandyList];
        updatedCandy[existingItemIndex] = {
          ...updatedCandy[existingItemIndex],
          quantity: updateQuantity,
        };
        setItems(updatedCandy);
      }
    }
  };

  const candyContext = {
    items: items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  useEffect(() => {
    console.log("candy_context:", items);
  }, [items]);

  return (
    <CandyContext.Provider value={candyContext}>
      {props.children}
    </CandyContext.Provider>
  );
};

export default CandyContextProvider;
