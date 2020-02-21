import {
  ADD_NEW_ACCOUNT,
  CHANGE_ACCOUNT,
  DELETE_ACCOUNT,
  TOGGLE_NEW_FORM,
  TOGGLE_FORM,
  FETCH_ACCOUNTS,
  FETCH_ACCOUNTS_SUCCESS,
  FETCH_ACCOUNTS_FAILED
} from "../constants";

import initialState from "./initialState";

export default (state = initialState.accounts, action) => {
  switch (action.type) {
    case FETCH_ACCOUNTS:
      return {
        loading: true,
        error: false,
        data: []
      };
    case FETCH_ACCOUNTS_SUCCESS:
      return {
        loading: false,
        error: false,
        data: action.payload
      };
    case FETCH_ACCOUNTS_FAILED:
      return {
        loading: false,
        error: true,
        data: []
      };
    case ADD_NEW_ACCOUNT:
      state.data.shift(); // remove first element with obj isNew
      return { ...state, data: [...state.data, { ...action.payload }] };

    case CHANGE_ACCOUNT:
      debugger;
      return {
        ...state,
        data: [
          ...state.data.map(user => {
            if (user.id === action.payload.id) {
              return {
                ...user, // merge new data with old
                ...action.payload,
                isExisting: false // hide change form
              };
            }
            return user;
          })
        ]
      };
    case DELETE_ACCOUNT:
      return {
        ...state,
        data: [...state.data.filter(user => user.id !== action.payload)]
      };

    case TOGGLE_NEW_FORM:
      // if have payload need to add form
      if (action.payload) {
        // if have payload add new empty obj for show form
        if (state.data.find(el => el.isNew)) {
          return {
            ...state
          };
        }
        return {
          ...state,
          data: [{ isNew: action.payload }, ...state.data]
        };
      }
      // hide new form
      state.data.shift(); // remove first element
      return {
        ...state
      };

    case TOGGLE_FORM:
      return {
        ...state,
        data: [
          ...state.data.map(user => {
            if (user.id === action.payload) {
              return {
                ...user,
                isExisting: !user.isExisting // this is key for check in render to show form
              };
            }
            return user;
          })
        ]
      };

    default:
      return state;
  }
};
