import axios from "axios";
const ENDPOINT = "http://challenge-react.alkemy.org";

export default function login({ email, password }) {
  return axios
    .post(`${ENDPOINT}`, {
      email: email,
      password: password,
    })
    .then((res) => {
      return res.data.token;
    });
}
