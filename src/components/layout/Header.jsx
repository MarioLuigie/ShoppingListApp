import React from "react";
// import '../../_style.scss';
import './Header.scss';

export default function Header ({
  title
}) {

  return (
    <header className="header">
      <div className="header__title">
        {title}
      </div>

    </header>
  )
}