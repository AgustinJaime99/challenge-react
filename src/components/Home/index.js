import React from "react";
import Fade from "react-reveal/Fade";

import { Link } from "wouter";

import useUser from "../../hooks/useUser";

import Team from "../Team";

import { Icon } from "@iconify/react";
import loginOutlined from "@iconify-icons/ant-design/login-outlined";

function Home() {
  const { isLogged } = useUser();

  return (
    <div id="home">
      <Fade duration={1000} delay={500}>
        {isLogged ? (
          <div className="main-home">
            <Team />
            <h2>
              <Link to="/search">Search</Link> your hero !
            </h2>
          </div>
        ) : (
          <div className="main-home">
            <h1 className="title">Welcome ! </h1>
            <h2 className="contenttext">
              you need{"  "}
              <Link to="/login">
                login <Icon icon={loginOutlined} />
              </Link>
              {"  "}to see your heros
            </h2>
          </div>
        )}
      </Fade>
    </div>
  );
}

export default Home;
