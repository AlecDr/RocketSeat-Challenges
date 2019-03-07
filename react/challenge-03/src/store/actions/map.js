import * as actionTypes from "./actionTypes";

export const fetchGithubRepoStart = user => {
  return {
    type: actionTypes.FETCH_GITHUB_REPO_START,
    payload: {
      user
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
