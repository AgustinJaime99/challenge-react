import axios from "axios";
import { API_KEY, API_URL } from "./settings";

export default async function getHero(id) {
  const res = await axios.get(`${API_URL}/${API_KEY}/${id}`);
  return res;
}
