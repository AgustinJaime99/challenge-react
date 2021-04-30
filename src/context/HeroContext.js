import React, { useState } from "react";

const Context = React.createContext({});

export function HeroContextProvider({ children }) {
  const [hero, setHero] = useState([]);

  return (
    <Context.Provider value={{ hero, setHero }}>{children}</Context.Provider>
  );
}

export default Context;
