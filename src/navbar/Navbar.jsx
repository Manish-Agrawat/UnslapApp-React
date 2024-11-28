import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
        <h1>Jai Baba Ki </h1>
      <ul className="nav">

        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="search">
        <input type="text" placeholder="Search.." />
       
      </div>
    </nav>
  );
};

export default Navbar;
