import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import TicTacGame from "./tic_tac_game";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <TicTacGame />
    </div>
  );
}

export default App;
