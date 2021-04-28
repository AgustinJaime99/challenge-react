import React from "react";
import Search from "../Search";
import { Link } from "react-router-dom";

import useUser from "../../hooks/useUser";

function Navbar() {
  const { isLogged } = useUser();
  return (
    <>
      <header>
        <h1>Hero-App</h1>
        <nav>
          <Search />
        </nav>
        {isLogged ? <Link>Logout</Link> : <Link to="/login">Login</Link>}
      </header>
    </>
  );
}

export default Navbar;
