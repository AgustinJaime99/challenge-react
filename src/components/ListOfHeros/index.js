import React from "react";
import { useLocation } from "wouter";
import useHero from "../../hooks/useHero";
import useUser from "../../hooks/useUser";
import getHero from "../../utils/getHero";

import Swal from "sweetalert2";

export default function ListOfHeros({ heros }) {
  const { addToTeam, team } = useUser();
  const { setHero } = useHero();
  const [, setLocation] = useLocation();

  const handleClick = (id) => {
    getHero(id).then((res) => {
      setHero(res);
    });
    setLocation(`/hero/${id}`);
  };

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
    <div id="container_cards">
      {heros &&
        heros.map(({ id, name, image }) => (
          <div key={id} className="container_cards__single">
            <h1 className="name_hero">{name}</h1>
            <img className="hero_img" src={image.url} alt={name}></img>
            <button className="btn-card" onClick={() => handleClick(id)}>
              Detail
            </button>
            {/* Este boton se tendria que mostrar mientras el equipo sea menor 
            a 6 integrantes */}
            <button className="btn-card" onClick={() => handleTeam(id)}>
              {" "}
              Add to Team
            </button>
          </div>
        ))}

      {heros === [] && <h1>Busca tu heroe</h1>}
    </div>
  );
}
