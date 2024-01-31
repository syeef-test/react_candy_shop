import React, { useContext, useState, useEffect } from "react";
import CandyContext from "./candy-context";

const CandyContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (newItem) => {
    const existingItemIndex = items.findIndex(
      (item) => item.candy_name === newItem.candy_name
    );

    if (existingItemIndex !== -1) {
      let updatedCandy = [...items];
      updatedCandy[existingItemIndex].quantity =
        Number(updatedCandy[existingItemIndex].quantity) +
        Number(newItem.quantity);
      setItems(updatedCandy);
    } else {
      setItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const addItemByOneHandler = (newItem) => {
    const existingItemIndex = items.findIndex(
      (item) => item.candy_name === newItem.candy_name
    );

    if (existingItemIndex !== -1) {
      let updatedCandy = [...items];
      updatedCandy[existingItemIndex].quantity =
        Number(updatedCandy[existingItemIndex].quantity) + 1;
      setItems(updatedCandy);
    } else {
      setItems((prevItems) => [...prevItems, newItem]);
    }
  };
  const removeItemHandler = (newItem, quantity) => {
    // alert("remove by one");
    const prevCandyList = [...items];

    const existingItemIndex = prevCandyList.findIndex(
      (item) => item.candy_name === newItem.candy_name
    );

    if (existingItemIndex !== -1) {
      let updateQuantity = Number(prevCandyList[existingItemIndex].quantity);
      if (updateQuantity > 0) {
        updateQuantity = updateQuantity - `${quantity}`;
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
    addItemByOne: addItemByOneHandler,
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
