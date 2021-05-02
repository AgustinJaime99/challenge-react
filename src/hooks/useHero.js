import { useContext } from "react";
import Context from "../context/HeroContext";

export default function useHero({ search } = { search: null }) {
  const { heros, setHeros, hero, setHero } = useContext(Context);

  return {
    hero,
    setHero,
    setHeros,
    heros,
  };
}
