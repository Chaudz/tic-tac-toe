import "./square.css";

function Square({ onSquareClick, value }) {
  return (
    <>
      <button
        className="square-box"
        onClick={onSquareClick}
        style={{ color: value === "X" ? "red" : "white" }}
      >
        {value}
      </button>
    </>
  );
}

export default Square;
