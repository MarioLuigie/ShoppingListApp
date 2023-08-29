import React from "react";
import "./Button.scss";

export default function Button ({
  label,
  onClick
}) {

  return (
    <div className="buttonSection">
      <button 
        className="button"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  )
}