import React from "react";
import logo from "../logo512.png";

const Headers = () => {
  return (
    <header className="header_wrap">
      <div className="container">
        <div className="row">
          <img src={logo} alt="Header Logo" className="header_logo" />
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="../../public/about.html">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Headers;
