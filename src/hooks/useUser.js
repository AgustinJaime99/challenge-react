import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import loginService from "../utils/login";
import getHero from "../utils/getHero";
import Swal from "sweetalert2";

export default function useUser() {
  const { jwt, setJwt, setProfile, profile, team, setTeam } =
    useContext(Context);
  const [loading, setLoading] = useState(false);

  const loginFB = useCallback(
    (res) => {
      if (res.status === "connected") {
        window.FB.api("/me?fields=id,name,email,picture", async (userData) => {
          const user = {
            ...userData,
            accessToken: res.authResponse.accessToken,
          };
          await setProfile(user);
          await setJwt(res.authResponse.accessToken);
        });
      }
    },
    [setProfile, setJwt]
  );

  const login = useCallback(
    ({ email, password }) => {
      setLoading(true);
      loginService({ email, password })
        .then((res) => {
          if (res.token) {
            setLoading(false);
            const token = res.token;
            setJwt(token);
            localStorage.setItem("jwt", token);
          } else {
            setLoading(false);
            Swal.fire(
              "Error",
              "The username or password is incorrect",
              "error"
            );
          }
        })
        .catch((err) => {
          localStorage.removeItem("jwt");
          console.log(err);
        });
    },
    [setJwt, setLoading]
  );

  const logout = useCallback(() => {
    localStorage.removeItem("jwt");
    setJwt(null);
    setProfile([]);
  }, [setJwt, setProfile]);

  const addToTeam = useCallback(
    (id) => {
      if (team.length <= 5) {
        getHero(id).then((res) => team.push(res.data));
      }
    },
    [team]
  );

  const removeHero = useCallback(
    (id) => {
      let newTeam = team.filter((i) => id !== i.id);
      setTeam(newTeam);
    },
    [team, setTeam]
  );

  const totalPowerStats = useCallback(() => {
    let powerStats = team.map((i) => i.powerstats);
    let intelligence = powerStats.reduce(
      (sum, value) =>
        isNaN(value.intelligence) ? sum : sum + parseInt(value.intelligence),
      0
    );
    let combat = powerStats.reduce(
      (sum, value) =>
        isNaN(value.combat) ? sum : sum + parseInt(value.combat),
      0
    );
    let durability = powerStats.reduce(
      (sum, value) =>
        isNaN(value.durability) ? sum : sum + parseInt(value.durability),
      0
    );
    let power = powerStats.reduce(
      (sum, value) => (isNaN(value.power) ? sum : sum + parseInt(value.power)),
      0
    );
    let speed = powerStats.reduce(
      (sum, value) => (isNaN(value.speed) ? sum : sum + parseInt(value.speed)),
      0
    );
    let strength = powerStats.reduce(
      (sum, value) => (isNaN(value.speed) ? sum : sum + parseInt(value.speed)),
      0
    );

    return {
      combat,
      durability,
      intelligence,
      power,
      speed,
      strength,
    };
  }, [team]);

  const allianceTeam = useCallback(() => {
    let alignment = team.map((i) => i.biography.alignment);
    let good = 0;
    let bad = 0;
    for (let i of alignment) {
      if (i === "good") {
        good += 1;
      }
      if (i === "bad") {
        bad += 1;
      }
    }
    if (good > bad) {
      return "Heroic";
    }
    if (good < bad) {
      return "Evil";
    }
    if (good === bad) {
      return "Neutral";
    }
  }, [team]);

  return {
    allianceTeam,
    totalPowerStats,
    removeHero,
    addToTeam,
    isLogged: Boolean(jwt),
    loading,
    login,
    logout,
    loginFB,
    profile,
    jwt,
    team,
  };
}
