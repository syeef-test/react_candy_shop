import { useState } from "react";
import "./App.css";
import AddCandy from "./components/AddCandy";
import CandyList from "./components/CandyList";
import CandyContextProvider from "./store/CandyContextProvider";

function App() {
  return (
    <>
      <h2>Candy Shop</h2>
      <CandyContextProvider>
        <AddCandy />
        <CandyList />
      </CandyContextProvider>
    </>
  );
}

export default App;
