import Ceil from "./ceil";

function TicTacToe() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>TicTacToe</h1>
      <div className="board">
        <Ceil className="board__ceil" />
        <Ceil className="board__ceil" />
        <Ceil className="board__ceil" />
        <Ceil className="board__ceil" />
        <Ceil className="board__ceil" />
        <Ceil className="board__ceil" />
        <Ceil className="board__ceil" />
        <Ceil className="board__ceil" />
        <Ceil className="board__ceil" />
      </div>
    </>
  );
}

export default TicTacToe;
