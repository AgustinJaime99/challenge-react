import axios from "axios";
import { API_KEY, API_URL } from "./settings";

export default async function getHeros(search) {
  const res = await axios.get(`${API_URL}/${API_KEY}/search/${search}`);
  return res;
}
