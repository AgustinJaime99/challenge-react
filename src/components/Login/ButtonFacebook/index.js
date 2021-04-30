import React from "react";
import { useLocation } from "wouter";
import useUser from "../../../hooks/useUser";

function ButtonFacebook() {
  const [, setLocation] = useLocation();
  const { loginFB } = useUser();

  const fbLogin = () => {
    if (!window.FB) return;
    window.FB.getLoginStatus((res) => {
      if (res.status === "connected") {
        loginFB(res);
        setLocation("/");
      } else {
        window.FB.login(loginFB, {
          scope: "public_profile, email",
        });
      }
    });
  };

  return (
    <>
      <button onClick={fbLogin}>Sing in with Facebook</button>
    </>
  );
}

export default ButtonFacebook;
