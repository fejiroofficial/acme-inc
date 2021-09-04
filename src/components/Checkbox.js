import React from "react";

function Checkbox({ id, type, handleClick, isChecked, photo }) {
  return (
    <input
      type={type}
      onChange={(e) => handleClick(e, id, photo)}
      checked={isChecked}
    />
  );
}

export default Checkbox;
