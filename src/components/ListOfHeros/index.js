import axios from "axios";
import React from "react";
import { useLocation } from "wouter";
import useHero from "../../hooks/useHero";
import { API_KEY, API_URL } from "../../utils/settings";

export default function ListOfHeros({ heros }) {
  const { setHero } = useHero();
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
    getHero(id);
    //Agregar al team
  };

  return (
    <div id="container_cards">
      {heros &&
        heros.map(({ id, name, image }) => (
          <div key={id} className="container_cards__single">
            <h1>{name}</h1>
            <img className="hero_img" src={image.url} alt={name}></img>
            <button onClick={() => handleClick(id)}>SEE MORE</button>
            {/* Este boton se tendria que mostrar mientras el equipo sea menor 
            a 6 integrantes */}
            <button onClick={() => handleTeam(id)}> ADD TO TEAM</button>
          </div>
        ))}

      {heros === [] && <h1>Busca tu heroe</h1>}
    </div>
  );
}
