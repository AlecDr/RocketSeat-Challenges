import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  users: [],
  error: null,
  modalIsOpened: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GITHUB_REPO_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_GITHUB_REPO_SUCCESS:
      const users = state.users.slice();
      users.push(action.payload.user);
      return { ...state, loading: false, users: users };
    case actionTypes.FETCH_GITHUB_REPO_FAILED:
      return { ...state, loading: false, error: action.payload.error };
    case actionTypes.ON_OPEN_MODAL:
      return { ...state, modalIsOpened: true };
    case actionTypes.ON_CLOSE_MODAL:
      return { ...state, modalIsOpened: false };

    default:
      return { ...state };
  }
};
