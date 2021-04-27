import React, { useState, useEffect } from "react";
import ButtonFacebook from "./ButtonFacebook";
import { useDispatch } from "react-redux";
import {
  setUser,
  getUser,
  logOut,
} from "../../redux/loginReducer/actionsLogin";

function Login() {
  const dispatch = useDispatch();
  const [login, setLogin] = useState(false);

  const onLogin = (user) => {
    dispatch(setUser(user));
    setLogin(true);
  };

  const Logout = () => {
    dispatch(logOut());
    setLogin(false);
    console.log(login);
  };

  // useEffect(() => {
  //   const checkSession = () => {
  //     const user = getUser();
  //     if (user) {
  //     }
  //   };
  //   checkSession();
  // }, []);

  console.log(login);

  return (
    <>
      {login ? (
        <div>
          <button onClick={Logout}>Log out</button>
        </div>
      ) : (
        <ButtonFacebook onLogin={onLogin} />
      )}
    </>
  );
}

export default Login;
