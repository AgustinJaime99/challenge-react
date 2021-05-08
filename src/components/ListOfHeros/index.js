import axios from "axios";
import React from "react";
import { useLocation } from "wouter";
import useHero from "../../hooks/useHero";
import useTeam from "../../hooks/useTeam";
import { API_KEY, API_URL } from "../../utils/settings";

export default function ListOfHeros({ heros }) {
  const { setHero, hero } = useHero();
  const { totalTeam } = useTeam();
  const [, setLocation] = useLocation();

  const getHero = async (id) => {
    const res = await axios.get(`${API_URL}/${API_KEY}/${id}`);
    console.log(res);
    setHero(res);
  };

  const handleClick = (id) => {
    getHero(id);
    setLocation(`/hero/${id}`);
  };

  const handleTeam = (id) => {
    getHero(id); //capturamos el id de nuestro heroe

    //verificamos que nuestro team no este lleno
    if (totalTeam <= 6) {
      totalTeam.push(hero);
      console.log("TOTAL TEAM:", totalTeam);
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
