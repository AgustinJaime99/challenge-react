export const SET_USER = "SET_USER";
export const LOG_OUT = "LOG_OUT";
export const GET_USER = "GET_USER";

export function setUser(user) {
  return async (dispatch) => {
    dispatch({
      type: SET_USER,
      payload: user,
    });
    setItem("user", user);
  };
}

export function getUser(user) {
  return (dispatch) => {
    dispatch({
      type: GET_USER,
      payload: user,
    });
    getItem("user");
  };
}

export function logOut() {
  return (dispatch) => {
    localStorage.removeItem("user");
    dispatch({
      type: LOG_OUT,
    });
  };
}

const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key) => {
  if (localStorage.getItem(key)) JSON.parse(localStorage.getItem(key));
  return undefined;
};
