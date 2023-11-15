import "./history.css";

function History({ history, onJumTo }) {
  return (
    <div>
      {history.map((squares, move) => {
        let description;
        if (move <= 0) {
          description = "go to game start";
        } else {
          description = `goto to move #${move}`;
        }
        return (
          <li
            key={move}
            style={{
              marginTop: "5px",
              marginBottom: "5px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              className="button-29"
              onClick={() => {
                onJumTo(move);
              }}
            >
              {description}
            </button>
          </li>
        );
      })}
    </div>
  );
}

export default History;
