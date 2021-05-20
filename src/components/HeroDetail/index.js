import React from "react";
import { Link } from "wouter";
import useHero from "../../hooks/useHero";
import Fade from "react-reveal/Fade";
import useUser from "../../hooks/useUser";

import Swal from "sweetalert2";

const HeroDetail = () => {
  const { addToTeam, team } = useUser();
  const { hero } = useHero();

  const handleTeam = (id) => {
    if (team.length === 0) {
      addToTeam(id);
      Swal.fire("Success!", "Added to Team", "success");
    } else {
      let map = team.map((i) => i.id === id);
      if (map.includes(true)) {
        return Swal.fire("Error", "Your Hero is already on the team", "error");
      } else {
        addToTeam(id);
        Swal.fire("Success!", "Added to Team", "success");
      }
    }

    if (team.length === 6) {
      return Swal.fire("Error", "Your Team is full", "error");
    }
  };

  return (
    <>
      {hero.data && (
        <div id="container-detail">
          <Fade left duration={800} delay={500}>
            <div className="image-container">
              <img
                className="img"
                src={hero.data.image.url}
                alt={hero.data.name}
              />
            </div>
          </Fade>

          <Fade duration={800} delay={500}>
            <div className="info">
              <div className="title">
                <h1 className="name-hero">{hero.data.name}</h1>
                <h3 className="fullname-hero">
                  {hero.data.biography["full-name"]}
                </h3>
              </div>

              <div className="details">
                <span className="span">Appearance</span>
                <ul className="list">
                  <li className="list-item">
                    Weight:{"   "}
                    {hero.data.appearance.weight[1] === "0 kg"
                      ? " ???"
                      : hero.data.appearance.weight[1]}
                  </li>
                  <li className="list-item">
                    Height:{"   "}
                    {hero.data.appearance.height[1] === "0 cm"
                      ? " ???"
                      : hero.data.appearance.height[1]}
                  </li>
                  <li className="list-item">
                    Eye color:{"   "}
                    {hero.data.appearance["eye-color"] === "-"
                      ? " No have eye color"
                      : hero.data.appearance["eye-color"]}
                  </li>
                  <li className="list-item">
                    Gender:{"   "}
                    {hero.data.appearance.gender === "-"
                      ? " Unknown gender"
                      : hero.data.appearance.gender}{" "}
                  </li>
                  <li className="list-item">
                    Alias:{"   "}
                    {hero.data.biography.aliases[0] === "-"
                      ? " No have aliases"
                      : hero.data.biography.aliases[0]}
                  </li>
                  <li className="list-item">
                    Hair:{"   "}
                    {hero.data.appearance["hair-color"] === "-"
                      ? " Unknown hair"
                      : hero.data.appearance["hair-color"]}
                  </li>
                  <li className="list-item">
                    Workplace:{"   "}
                    {hero.data.work.base === "-"
                      ? " Unknown work space"
                      : hero.data.work.base}
                  </li>
                </ul>
                <button
                  className="btn-card"
                  onClick={() => handleTeam(hero.data.id)}
                >
                  Add to team
                </button>
              </div>
            </div>
          </Fade>
        </div>
      )}
      <Link to="/search" className="l">
        Go search more heros
      </Link>
    </>
  );
};

export default HeroDetail;
