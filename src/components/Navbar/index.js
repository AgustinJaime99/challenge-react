import React from "react";
import { Link } from "wouter";
import Fade from "react-reveal/Fade";

import useUser from "../../hooks/useUser";

function Navbar() {
  const { isLogged, logout, profile } = useUser();

  return (
    <>
      <Fade top>
        <header>
          <Link to="/">
            <h1>Hero-App</h1>
          </Link>
          {isLogged && profile.name === null && (
            <div className="items">
              <Link to="/" onClick={logout}>
                Log out
              </Link>
            </div>
          )}
          {isLogged && profile.name && (
            <div className="items">
              <p>Welcome {profile.name}</p>
              <img
                className="profileImage"
                src={profile.picture.data.url}
                alt={profile.name}
              />
              <p className="log">
                <Link to="/" onClick={logout}>
                  Log out
                </Link>
              </p>
            </div>
          )}
          {isLogged === false && (
            <div className="items">
              <p className="log">
                <Link to="/login">Login</Link>
              </p>
            </div>
          )}
        </header>
      </Fade>
    </>
  );
}

export default Navbar;
