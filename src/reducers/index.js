import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import account from "../reducers/account";
import search from "../reducers/search";

const rootReducer = combineReducers({
  routing: routerReducer,
  account,
  search
});

export default rootReducer;
