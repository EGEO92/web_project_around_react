import React from "react";
import logoUs from "../images/header_title.png";

export default function Header() {
  return (
    <header className="header">
      <img
        src={logoUs}
        className="header__image"
        id="header_title"
        alt="Que bonito logo que dice alrededor de U S"
      />
    </header>
  );
}
