import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="Header">
      <div className="logo">{props.logo}</div>
      <div className="navbar">
        <ul className="list__wrap">
          <li className="list__elements">
            <a href="#">Home</a>
          </li>
          <li className="list__elements">
            <a href="#">About</a>
          </li>
          <li className="list__elements">
            <a href="#">Testimonials</a>
          </li>
          <li className="list__elements">
            <a href="#">Projects</a>
          </li>
          <li className="list__elements">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
