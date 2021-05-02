import axios from "axios";
import React from "react";
import { useLocation } from "wouter";
import useHero from "../../hooks/useHero";
import { API_KEY, API_URL } from "../../utils/settings";

export default function ListOfHeros({ heros }) {
  const { hero, setHero } = useHero();
  const [, setLocation] = useLocation();

  const getHero = async (id) => {
    const res = await axios.get(`${API_URL}/${API_KEY}/${id}`);
    console.log(res);
    setHero(res);
  };

  console.log(hero);

  const handleClick = (id) => {
    getHero(id);
    setLocation(`/hero/${id}`);
  };

  return (
    <div>
      {heros &&
        heros.map(({ id, name, image }) => (
          <div key={id}>
            <h1>{name}</h1>
            <img src={image.url} alt={name}></img>
            <button onClick={() => handleClick(id)}>VER ESTADISTICAS</button>
          </div>
        ))}

      {heros === undefined && <h1>Busca tu heroe</h1>}
    </div>
  );
}
