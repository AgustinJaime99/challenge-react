import axios from "axios";
import { API_KEY, API_URL } from "./settings";

export default function getHero({ search }) {
  return axios.get(`${API_URL}/${API_KEY}/search/${search}`).then((res) => {
    console.log(res);
    return res;
  });
}
