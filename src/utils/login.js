import axios from "axios";
const ENDPOINT = "http://challenge-react.alkemy.org";

export default function login({ email, password }) {
  return axios
    .post(`${ENDPOINT}`, {
      email: email,
      password: password,
    })
    .then((res) => {
      if (res) return res.data;
    })
    .catch((err) => {
      return err;
    });
}
