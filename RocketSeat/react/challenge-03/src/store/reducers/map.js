import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  users: [],
  error: null,
  modalIsOpened: false,
  selectedCoords: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GITHUB_REPO_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_GITHUB_REPO_SUCCESS:
      const users = state.users.slice();
      users.push(action.payload.user);
      return {
        ...state,
        loading: false,
        modalIsOpened: false,
        users: users,
        selectedCoords: null
      };
    case actionTypes.FETCH_GITHUB_REPO_FAILED:
      return {
        ...state,
        loading: false,
        modalIsOpened: false,
        error: action.payload.error,
        selectedCoords: null
      };
    case actionTypes.REMOVE_USER:
      let filteredUsers = state.users.slice();
      filteredUsers = filteredUsers.filter(
        user => user.login !== action.payload.user.login
      );

      return {
        ...state,
        users: filteredUsers
      };
    case actionTypes.ON_OPEN_MODAL:
      return {
        ...state,
        modalIsOpened: true,
        selectedCoords: {
          longitude: action.payload.coords[0],
          latitude: action.payload.coords[1]
        }
      };
    case actionTypes.ON_CLOSE_MODAL:
      return { ...state, modalIsOpened: false, selectedCoords: null };

    default:
      return { ...state };
  }
};
