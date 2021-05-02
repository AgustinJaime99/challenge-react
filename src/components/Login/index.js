import React, { useState, useEffect } from "react";
import ButtonFacebook from "./ButtonFacebook";
import useUser from "../../hooks/useUser";
import { useLocation } from "wouter";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setLocation] = useLocation();
  const { isLogged, login } = useUser();

  useEffect(() => {
    if (isLogged) {
      setLocation("/");
      onLogin && onLogin();
    }
  }, [isLogged, setLocation, onLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <>
      {isLogged ? (
        <div>
          <h1>You're log now !</h1>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="userName"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Login</button>
          </form>
          <ButtonFacebook></ButtonFacebook>
        </div>
      )}
    </>
  );
}

export default Login;
