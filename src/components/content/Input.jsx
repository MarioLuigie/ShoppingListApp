import React from "react";
import './Input.scss';

export default function Input ({
  placeholder,
  type,
  id,
  label,
  value,
  onChange
}) {

  return (
    <div className="inputSection">
      <label 
        htmlFor={id}
        className="label"
      >
        {label}
      </label>
      <input 
        className="input"
        placeholder={placeholder}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}