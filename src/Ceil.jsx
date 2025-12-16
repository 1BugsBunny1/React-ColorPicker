import { useState } from "react";

let turn = "X";

{
  turn === "X" ? "O" : "X";
}

function Ceil() {
  const [isclicked, setIsClicked] = useState("");

  function handleClick() {
    setIsClicked(<div className="board__ceil__mark">{turn}</div>);
  }
  return (
    <div onClick={handleClick} className="board__ceil">
      {isclicked}
    </div>
  );
}

export default Ceil;
