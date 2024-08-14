import React, { useState } from "react";
import "./Login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [login, setLogin] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("https://dummyjson.com/auth/login", {
        username: login,
        password: password,
        expiresInMins: 30,
      })
      .then((res) => {
        const data = res.data;
        if (data.token) {
          localStorage.setItem("x-auth-token", data.token);
          console.log("Token saved to localStorage:", data.token);
          navigate("/admin");
          toast.success("Weclome");
        } else {
          console.error("Failed to retrieve token:", data);
          toast.error("Error");
        }
      })
      .catch((err) => {
        console.error("Login failed:", err);
      });
  };

  return (
    <div>
      <div className="continer_form">
        <form onSubmit={handleLogin}>
          <input
            name="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="inp"
            type="text"
            placeholder="Login..."
          />
          <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inp"
            type="password"
            placeholder="Password..."
          />
          <button type="submit">Войти</button>
          <Link to="/">
            <button type="button">Назад</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
