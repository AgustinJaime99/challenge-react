import React from "react";
import Team from "../Team";
import useUser from "../../hooks/useUser";
import { Link } from "wouter";

function Home() {
  const { isLogged } = useUser();

  return (
    <>
      {isLogged ? (
        <div>
          <Team />
          <Link to="/search">Search</Link> your hero !
        </div>
      ) : (
        <div>
          <h1>Welcome ! </h1>
          <h2>
            you need <Link to="/login">login</Link> to see your heros
          </h2>
        </div>
      )}
    </>
  );
}

export default Home;
