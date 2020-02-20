import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import users from "../reducers/users";
import search from "../reducers/search";

const rootReducer = combineReducers({
  routing: routerReducer,
  users,
  search
});

export default rootReducer;
