import React from "react";
import { useLocation } from "wouter";

import useUser from "../../../hooks/useUser";

import facebookFill from "@iconify-icons/akar-icons/facebook-fill";
import { Icon } from "@iconify/react";

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
      <button onClick={fbLogin} className="btn-fb-log">
        <Icon icon={facebookFill} className="fb-icon" />
        Sing in with Facebook
      </button>
    </>
  );
}

export default ButtonFacebook;
