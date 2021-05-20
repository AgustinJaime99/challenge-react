import React from "react";
import useUser from "../../hooks/useUser";
import Swal from "sweetalert2";

function Team() {
  const { team, removeHero } = useUser();

  const handleRemove = (id) => {
    removeHero(id);
    Swal.fire("Success!", "Hero removed", "success");
  };

  const handleColor = (str) => {
    if (str === "bad") {
      return "bad-card";
    } else if (str === "good") {
      return "good-card";
    } else {
      return "single-card";
    }
  };

  return (
    <div id="container-team">
      {team &&
        team.map(({ id, name, powerstats, image, biography }) => (
          <div key={id} className={handleColor(biography.alignment)}>
            <img className="image-team" alt={name} src={image.url} />
            <h1 className="name-hero">{name}</h1>
            <span className="span">Powerstats</span>
            <ul className="list">
              <li className="list-item">
                combat: {powerstats.combat === "null" ? "0" : powerstats.combat}
              </li>
              <li className="list-item">
                durability:{" "}
                {powerstats.durability === "null" ? "0" : powerstats.durability}
              </li>
              <li className="list-item">
                intelligence:{" "}
                {powerstats.intelligence === "null"
                  ? "0"
                  : powerstats.intelligence}
              </li>
              <li className="list-item">
                power: {powerstats.power === "null" ? "0" : powerstats.power}
              </li>
              <li className="list-item">
                speed: {powerstats.speed === "null" ? "0" : powerstats.speed}
              </li>
              <li className="list-item">
                strength:{" "}
                {powerstats.strength === "null" ? "0" : powerstats.strength}
              </li>
            </ul>
            <button className="btn-card-team" onClick={() => handleRemove(id)}>
              Remove
            </button>
          </div>
        ))}
    </div>
  );
}

export default Team;
