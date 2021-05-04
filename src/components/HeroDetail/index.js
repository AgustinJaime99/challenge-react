import React from "react";
import { Link } from "wouter";
import useHero from "../../hooks/useHero";

const HeroDetail = () => {
  const { hero } = useHero();
  console.log("Hero detail:", hero);
  // const appearance = hero.data.appearance;
  // const biography = hero.data.biography;
  // const work = hero.data.work;

  return (
    <>
      {hero.data && (
        <div>
          <img src={hero.data.image.url} alt={hero.data.name} />
          <h1>{hero.data.name}</h1>
          <h3>Nombre completo: {hero.data.biography["full-name"]}</h3>
          <span>Appearance</span>
          <ul>
            <li>
              Peso:
              {hero.data.appearance.weight[1] === "0 kg"
                ? " ???"
                : hero.data.appearance.weight[1]}
            </li>
            <li>
              Altura:
              {hero.data.appearance.height[1] === "0 cm"
                ? " ???"
                : hero.data.appearance.height[1]}
            </li>
            <li>
              Eye color:
              {hero.data.appearance["eye-color"] === "-"
                ? " No have eye color"
                : hero.data.appearance["eye-color"]}
            </li>
            <li>
              Gender:
              {hero.data.appearance.gender === "-"
                ? " Unknown gender"
                : hero.data.appearance.gender}{" "}
            </li>
            <li>
              Alias:
              {hero.data.biography.aliases[0] === "-"
                ? " No have aliases"
                : hero.data.biography.aliases[0]}
            </li>
            <li>
              Cabello:
              {hero.data.appearance["hair-color"] === "-"
                ? " Unknown hair"
                : hero.data.appearance["hair-color"]}
            </li>
            <li>
              Lugar de trabajo:
              {hero.data.work.base === "-"
                ? " Unknown work space"
                : hero.data.work.base}
            </li>
          </ul>
        </div>
      )}
      <Link to="/search">Go search more heros</Link>
    </>
  );
};

export default HeroDetail;
