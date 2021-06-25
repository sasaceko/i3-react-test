import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" hidden></input>

      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <Link to="/pageOne">Stranica 1</Link>
        <Link to="/PageTwo">Stranica 2</Link>
      </div>
    </div>
  );
};

export default Nav;
