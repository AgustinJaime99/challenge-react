import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import loginService from "../utils/login";

export default function useUser() {
  const { jwt, setJwt, setProfile, profile } = useContext(Context);
  const [state, setState] = useState({ loading: false, error: false });

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
      setState({ loading: true, error: false });
      loginService({ email, password })
        .then((jwt) => {
          setState({ loading: false, error: false });
          setJwt(jwt);
        })
        .catch((err) => {
          sessionStorage.removeItem("jwt");
          setState({ loading: false, error: true });
          console.error(err);
        });
    },
    [setJwt]
  );

  const logout = useCallback(() => {
    sessionStorage.removeItem("jwt");
    setJwt(null);
    setProfile([]);
  }, [setJwt, setProfile]);

  return {
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
    loginFB,
    profile,
  };
}
