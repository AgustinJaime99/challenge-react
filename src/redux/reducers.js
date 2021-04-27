import { combineReducers } from "redux";
import loginReducer from "./loginReducer/reducerLogin";

const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;
