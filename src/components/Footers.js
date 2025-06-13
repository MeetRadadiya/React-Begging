import React from "react";
import logo from "../logo512.png";

const Footers = () => {
  return (
    <footer className="footer_wrap">
      <div className="container">
        <div className="row">
          <div className="left_section">
            <img src={logo} alt="Footer Logo" className="footer_logo" />
            <h3>This is Footer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aperiam expedita recusandae tempore!</p>
          </div>
          <div className="center_section">
            <ul className="footer_link">
              <h3>Footer Title 1</h3>
              <li>
                <a href="#">This is Link 1</a>
              </li>
              <li>
                <a href="#">This is Link 2</a>
              </li>
              <li>
                <a href="#">This is Link 3</a>
              </li>
              <li>
                <a href="#">This is Link 4</a>
              </li>
              <li>
                <a href="#">This is Link 5</a>
              </li>
            </ul>
          </div>
          <div className="right_section">
            <ul className="footer_link">
              <h3>Footer Title 2</h3>
              <li>
                <a href="#">This is Link 1</a>
              </li>
              <li>
                <a href="#">This is Link 2</a>
              </li>
              <li>
                <a href="#">This is Link 3</a>
              </li>
              <li>
                <a href="#">This is Link 4</a>
              </li>
              <li>
                <a href="#">This is Link 5</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
