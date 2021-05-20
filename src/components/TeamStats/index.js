import React from "react";
import useUser from "../../hooks/useUser";

const TeamStats = () => {
  const { totalPowerStats, allianceTeam, team } = useUser();
  const { combat, durability, intelligence, power, speed, strength } =
    totalPowerStats();
  const alliance = allianceTeam();
  const totalPower =
    combat + durability + intelligence + power + strength + speed;

  const handleColor = (str) => {
    if (str === "Heroic") {
      return "heroic-color";
    } else if (str === "Evil") {
      return "evil-color";
    } else {
      return "neutral-color";
    }
  };

  return (
    <div id="team-stats">
      <h1 className="title">Total Stats</h1>
      {totalPower === 0 ? (
        <h2>You don't have stats 😓 </h2>
      ) : (
        <ul className="list">
          <li className="list-item">Combat: {combat}</li>
          <li className="list-item">Durability: {durability}</li>
          <li className="list-item">Intelligence: {intelligence}</li>
          <li className="list-item">Power: {power}</li>
          <li className="list-item">Speed: {speed}</li>
          <li className="list-item">Strength: {strength}</li>
        </ul>
      )}
      {team.length === 0 ? (
        <></>
      ) : (
        <>
          <h2 className="y">Your team is:</h2>
          <h2 className={handleColor(alliance)}>{alliance}</h2>
        </>
      )}
    </div>
  );
};

export default TeamStats;
