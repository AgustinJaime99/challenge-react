import { SET_USER, LOG_OUT, GET_USER } from "./actionsLogin";

const initialState = {
  user: {},
  isLogged: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: {
          email: action.payload.email,
          id: action.payload.id,
          name: action.payload.name,
        },
        isLogged: true,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        user: {},
        isLogged: false,
      };
    }
    case GET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};
