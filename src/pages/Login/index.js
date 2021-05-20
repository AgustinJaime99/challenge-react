import React from "react";
import Fade from "react-reveal/Fade";

import Login from "../../components/Login";

import { Icon } from "@iconify/react";
import bxsUser from "@iconify-icons/bx/bxs-user";

export default function LoginPage() {
  return (
    <Fade bottom>
      <div className="log_container">
        <h2 className="icon_user">
          <Icon icon={bxsUser} className="styled_icon" />
        </h2>
        <h3 className="sub_tittle">Log-in into your account </h3>
        <Login />
      </div>
    </Fade>
  );
}
