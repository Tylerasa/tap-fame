import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    var item = {
      email,
      password,
    };
    axios
      .post("/auth/login/", item)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.access);
        localStorage.setItem("refreshToken", res.data.refresh);
        navigate("/movies");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          backgroundColor: "#165480",
          padding: "20px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          style={{
            display: "block",
            padding: "8px",
            width: "100%",
            borderRadius: "18px",
            fontSize: "16px",
            outline: "#ddd",
            fontFamily: "Inter",
            borderWidth: 0,
            marginBottom: "20px",
          }}
          placeholder="Email"
        />

        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            display: "block",
            padding: "8px",
            width: "100%",
            borderRadius: "18px",
            fontSize: "16px",
            outline: "#ddd",
            fontFamily: "Inter",
            borderWidth: 0,
            // margin: "auto",
          }}
          placeholder="Password"
        />
        <div
          onClick={handleSubmit}
          style={{
            cursor: "pointer",
            background: "white",
            marginTop: "20px",
            padding: "8px 15px",
            borderRadius: "18px",
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
