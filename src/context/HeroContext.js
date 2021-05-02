import React, { useState } from "react";

const Context = React.createContext({});

export function HeroContextProvider({ children }) {
  const [heros, setHeros] = useState([]);
  const [hero, setHero] = useState([]);

  return (
    <Context.Provider value={{ heros, setHeros, hero, setHero }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
