import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  function changeColor(e) {
    setColor(e.target.value);
  }

  return (
    <div className="color-picker">
      <p>Color Picker</p>
      <div className="color-picker__color" style={{ backgroundColor: color }}>
        <p>Color: {color}: </p>
      </div>
      <input value={color} type="color" onChange={changeColor} />
    </div>
  );
}

export default ColorPicker;
