import "../CSS/header.css";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  const SignUp = () => {
    navigate("/sign-up");
  };
  const LogOut = () => {
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <ul className="Sign">
          {userData ? (
            <button className="logOut" onClick={LogOut}>
              Log-Out
            </button>
          ) : (
            <button className="signUp" onClick={SignUp}>
              Sign-Up
            </button>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
