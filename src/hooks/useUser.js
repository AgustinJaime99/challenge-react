import { useContext, useCallback } from "react";
import Context from "../context/UserContext";

export default function useUser() {
  const { jwt, setJWT } = useContext(Context);
  console.log("ContexT", jwt, setJWT);

  const login = useCallback(() => {
    setJWT(true);
    console.log(setJWT);
  }, [setJWT]);

  const logout = useCallback(() => {
    //window.sessionStorage.removeItem('jwt')
    setJWT(false);
  }, [setJWT]);

  return {
    login,
    logout,
    isLogged: jwt,
  };
}
