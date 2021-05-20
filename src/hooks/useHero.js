import axios from "axios";
import { useContext, useState } from "react";
import { API_KEY, API_URL } from "../utils/settings";
import Context from "../context/HeroContext";

export default function useHero() {
  const { heros, setHeros, hero, setHero } = useContext(Context);
  const [loading, setLoading] = useState(false);

  async function getHeros(search) {
    setLoading(true);
    const res = await axios.get(`${API_URL}/${API_KEY}/search/${search}`);
    setLoading(false);
    return res;
  }

  return {
    getHeros,
    loading,
    hero,
    setHero,
    setHeros,
    heros,
  };
}
