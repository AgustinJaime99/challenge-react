import React from "react";

function ButtonFacebook({ onLogin }) {
  const fbLogin = () => {
    if (!window.FB) return;
    window.FB.getLoginStatus((res) => {
      if (res.status === "connected") {
        facebookLoginHandler(res);
      } else {
        window.FB.login(facebookLoginHandler, {
          scope: "public_profile, email",
        });
      }
    });
  };

  const facebookLoginHandler = (res) => {
    console.log(res);
    if (res.status === "connected") {
      window.FB.api("/me?fields=id,name,email,picture", (userData) => {
        console.log(userData);
        const user = {
          ...userData,
          accessToken: res.authResponse.accessToken,
        };
        onLogin(user);
      });
    }
  };
  return (
    <>
      <button onClick={fbLogin}>Sing in with Facebook</button>
    </>
  );
}

export default ButtonFacebook;
