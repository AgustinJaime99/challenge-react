import React, { useState } from "react";

const Context = React.createContext({});

//mientras el team sea de un length menor a 6 se podra ver el boton add to team

export function TeamContextProvider({ children }) {
  const [team, setTeam] = useState(() => localStorage.getItem("team"));
  const [heros, setHeros] = useState([]);

  return (
    <Context.Provider value={{ team, setTeam, heros, setHeros }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
