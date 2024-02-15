import React from 'react';
import "./Button.css";

const Button = ({ type, symbol, color, handleClick }) => {
  let buttonClass = "button-wrapper";

  if (type === "numeric") {
    buttonClass += " numeric-button";
  } else if (type === "operator") {
    buttonClass += " operator-button";
  } else if (type === "clear") {
    buttonClass += " clear-button";
  }

  return (
    <div
      onClick={() => handleClick(symbol)}
      className={buttonClass}
      style={{ backgroundColor: color }}
    >
      {symbol}
    </div>
  );
};

export default Button;
