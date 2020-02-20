import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import users from "../reducers/users";

const rootReducer = combineReducers({
  routing: routerReducer,
  users
});

export default rootReducer;
