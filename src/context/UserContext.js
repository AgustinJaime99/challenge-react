import React, { useState } from "react";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [jwt, setJwt] = useState(() => localStorage.getItem("jwt"));
  const [profile, setProfile] = useState([]);
  const [team, setTeam] = useState([]);

  return (
    <Context.Provider
      value={{
        team,
        setTeam,
        jwt,
        profile,
        setJwt,
        setProfile,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
