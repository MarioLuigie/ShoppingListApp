import React from "react";
import './Footer.scss';

export default function Footer ({
  signature
}) {

  return (
    <div className="footer">
      {signature}
    </div>
  )
}