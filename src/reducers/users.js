import {
  ADD_NEW_USER,
  CHANGE_USER,
  DELETE_USER,
  TOGGLE_NEW_FORM,
  TOGGLE_FORM
} from "../actions/users";

import store from "../constants/store";
const initialState = store.users;

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      state.shift(); // remove first element with obj isNew
      return [...state, { ...action.payload }];

    case CHANGE_USER:
      return [
        ...state.map(user => {
          if (user.id === action.payload.id) {
            return {
              ...user, // merge new data with old
              ...action.payload,
              isExisting: false // hide change form
            };
          }
          return user;
        })
      ];

    case DELETE_USER:
      return [...state.filter(user => user.id !== action.payload)];

    case TOGGLE_NEW_FORM:
      if (action.payload) {
        // if have payload add new empty obj for show form
        return [{ isNew: action.payload }, ...state];
      }
      state.shift(); // remove first element
      return [...state];

    case TOGGLE_FORM:
      return [
        ...state.map(user => {
          if (user.id === action.payload) {
            return {
              ...user,
              isExisting: !user.isExisting // this is key for check in render to show form
            };
          }
          return user;
        })
      ];

    default:
      return state;
  }
};
