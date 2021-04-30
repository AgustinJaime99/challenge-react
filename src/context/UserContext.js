import React, { useState } from "react";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [jwt, setJwt] = useState(() => sessionStorage.getItem("jwt"));
  const [profile, setProfile] = useState([]);

  return (
    <Context.Provider
      value={{
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
