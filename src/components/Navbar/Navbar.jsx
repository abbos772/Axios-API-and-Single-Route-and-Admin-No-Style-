import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <Link to={"/"}>
          <h1>Home</h1>
        </Link>
        <Link to={"/login"}>
          <h1>Login</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
