import React, { useContext } from "react";
import CandyContext from "../store/candy-context";
import styles from "./CandyList.module.css";

function CandyList() {
  const candyContext = useContext(CandyContext);

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
            <button>Buy One</button>
          </div>
          <div className={styles.buttonContainer}>
            <button>Buy Two</button>
          </div>
          <div className={styles.buttonContainer}>
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
