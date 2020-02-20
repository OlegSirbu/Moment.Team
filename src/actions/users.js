export const ADD_NEW_USER = "USER/ADD_NEW_USER";
export const CHANGE_USER = "USER/CHANGE_USER";
export const DELETE_USER = "USER/DELETE_USER";

export const addNewUser = user => ({
  type: ADD_NEW_USER,
  payload: user
});

export const changeUser = user => ({
  type: CHANGE_USER,
  payload: user
});

export const deleteUser = id => ({
  type: DELETE_USER,
  payload: id
});
