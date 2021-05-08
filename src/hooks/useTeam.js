import { useContext } from "react";
import Context from "../context/HeroContext";

//AL PEDO CREAS OTRO CONTEXTO AGUSTIN MIRA COMO LO HICE MIUDEDEV PELOTUDO
export default function useTeam() {
  const { heros, setHeros, team, setTeam } = useContext(Context);

  const totalTeam = [];

  return {
    team,
    setTeam,
    setHeros,
    heros,
    totalTeam,
  };
}
