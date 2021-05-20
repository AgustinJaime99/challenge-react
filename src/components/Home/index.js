import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "wouter";
import useUser from "../../hooks/useUser";
import Team from "../Team";
import { Icon } from "@iconify/react";
import loginOutlined from "@iconify-icons/ant-design/login-outlined";
import TeamStats from "../TeamStats/index";

function Home() {
  const { isLogged, team } = useUser();

  return (
    <div id="home">
      <Fade duration={1000} delay={500}>
        {isLogged ? (
          <div className="main-home-log">
            {team.length === 0 ? (
              <h1>You haven't assemble your team yet</h1>
            ) : (
              <>
                <h1 className="title-team">This is your Team</h1>
                <Team />
                <TeamStats />
              </>
            )}

            <h2>
              Go <Link to="/search">search</Link> your heroes !
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
