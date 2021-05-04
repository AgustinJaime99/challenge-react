import React from "react";
import Team from "../Team";
import useUser from "../../hooks/useUser";
import { Link } from "wouter";
import Fade from "react-reveal/Fade";

function Home() {
  const { isLogged } = useUser();

  return (
    <>
      <Fade>
        {isLogged ? (
          <div className="main-home">
            <Team />
            <Link to="/search">Search</Link> your hero !
          </div>
        ) : (
          <div className="main-home">
            <h1>Welcome ! </h1>
            <h2>
              you need <Link to="/login">login</Link> to see your heros
            </h2>
          </div>
        )}
      </Fade>
    </>
  );
}

export default Home;
