import * as actionTypes from "./actionTypes";

export const fetchGithubRepoStart = (userName, coords) => {
  return {
    type: actionTypes.FETCH_GITHUB_REPO_START,
    payload: {
      user: {
        name: userName
      },
      coords
    }
  };
};

export const fetchGithubRepoSuccess = () => {
  return {
    type: actionTypes.FETCH_GITHUB_REPO_SUCCESS
  };
};

export const fetchGithubRepoFailed = () => {
  return {
    type: actionTypes.FETCH_GITHUB_REPO_FAILED
  };
};

export const onOpenModal = coords => {
  return {
    type: actionTypes.ON_OPEN_MODAL,
    payload: {
      coords
    }
  };
};

export const onCloseModal = () => {
  return {
    type: actionTypes.ON_CLOSE_MODAL
  };
};
