import React, { useContext } from "react";
import CandyContext from "../store/candy-context";
import styles from "./CandyList.module.css";
import CartContext from "../store/cart-context";

function CandyList() {
  const candyContext = useContext(CandyContext);
  const cartContext = useContext(CartContext);

  const candyBuyByOneHandler = (newItem) => {
    alert(newItem);
    cartContext.addItemByOne(newItem);
  };

  const candyBuyByTwoHandler = (newItem) => {
    alert(newItem);
    cartContext.addItemByTwo(newItem);
  };

  const candyBuyByThreeHandler = (newItem) => {
    alert(newItem);
    cartContext.addItemByThree(newItem);
  };

  const candyList = (
    <ul className={styles.candyList}>
      {candyContext.items.map((item) => (
        <li key={item.id}>
          <div>
            <strong>Name:</strong> {item.candy_name} <br />
            <strong>Description:</strong> {item.desc} <br />
            <strong>Price:</strong> {item.price} <br />
            <strong>Quantity:</strong>{" "}
            {item.quantity === 0 ? "Out of Stock" : item.quantity}
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={() => candyBuyByOneHandler(item)}>Buy One</button>
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={() => candyBuyByTwoHandler(item)}>Buy Two</button>
          </div>
          <div
            onClick={() => candyBuyByThreeHandler(item)}
            className={styles.buttonContainer}
          >
            <button>Buy Three</button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      CandyList:<div>{candyList}</div>
    </>
  );
}

export default CandyList;
