import { useState } from "react";
import Board from "./components/board";
import History from "./components/history";

function TicTacGame() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  //   console.log(xIsNext);

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <div style={{ marginTop: "20px" }}>
        <History history={history} onJumTo={jumTo} />
      </div>
    </div>
  );
}

export default TicTacGame;
