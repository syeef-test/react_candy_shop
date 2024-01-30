import { useState } from "react";
import "./App.css";
import AddCandy from "./components/AddCandy";
import CandyList from "./components/CandyList";

function App() {
  return (
    <>
      <h2>Candy Shop</h2>
      <AddCandy />
      <CandyList />
    </>
  );
}

export default App;
