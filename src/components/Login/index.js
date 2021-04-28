import React, { useState, useEffect } from "react";
import ButtonFacebook from "./ButtonFacebook";
import useUser from "../../hooks/useUser";
import { useLocation } from "wouter";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [, setLocation] = useLocation();
  const { isLogged, login } = useUser();

  console.log("login:", login);

  useEffect(() => {
    console.log(isLogged);
    if (isLogged);
  }, [isLogged, setLocation]);

  const handleSubmit = (e) => {
    e.preventdefault();
    login();
  };

  return (
    <>
      <form onClick={handleSubmit}>
        <input
          placeholder="userName"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
      {/* <ButtonFacebook></ButtonFacebook>
      <button type="button" onClick={() => history.push("/")}>
        GO HOME
      </button> */}
    </>
  );
}

export default Login;
