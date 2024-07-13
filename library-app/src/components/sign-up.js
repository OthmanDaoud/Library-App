import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../CSS/signUp.css";

const SignUp = () => {
  const [userData, setData] = useState({ name: "", email: "", password: "" });
  const navegate = useNavigate();

  const SaveData = (data) => {
    data.preventDefault();
     localStorage.setItem(`userData`, JSON.stringify(userData));
    navegate("/");
  };

  return (
    <div className="signUp">
      <h1>Creat Your Acount</h1>
      <form action="" className="form" onSubmit={SaveData}>
        <label htmlFor="username">User Name</label>
        <br />
        <input
          type="text"
          value={userData.name}
          onChange={(data) => {
            setData({ ...userData, name: data.target.value });
          }}
        />

        <br />

        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          value={userData.email}
          onChange={(data) => {
            setData({ ...userData, email: data.target.value });
          }}
        />
        <br />

        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          value={userData.password}
          onChange={(data) => {
            setData({ ...useState, password: data.target.value });
          }}
        />
        <br />
        <br />

        <button type="submit" onSubmit={SaveData}>
          Create Acount
        </button>
      </form>
    </div>
  );
};

export default SignUp;
