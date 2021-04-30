import React from "react";
import Search from "../Search";
import { Link } from "wouter";

import useUser from "../../hooks/useUser";

function Navbar() {
  const { isLogged, logout, profile } = useUser();
  console.log(profile);

  return (
    <>
      <header>
        <h1>Hero-App</h1>
        {isLogged && (
          <nav>
            <Search />
          </nav>
        )}
        {isLogged && profile.name ? (
          <div class="row">
            <div class="col">
              <Link to="#" onClick={logout}>
                Log out
              </Link>
            </div>
            <div class="col">
              Welcome {profile.name}
              <img src={profile.picture.data.url} alt={profile.name} />
            </div>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </header>
    </>
  );
}

export default Navbar;
