import { put } from "redux-saga/effects";
import axios from "../../axios-github";
import * as actionTypes from "../actions/actionTypes";

export function* fetchGithubRepo(action) {
  try {
    console.log(action.user);
    const response = yield axios.get("AlecDr");
    yield put({
      type: actionTypes.FETCH_GITHUB_REPO_SUCCESS,
      payload: { user: action.user }
    });
    console.log(response.data);
  } catch (error) {
    yield put({
      type: actionTypes.FETCH_GITHUB_REPO_FAILED,
      payload: { error }
    });
    console.log(error);
  }
}
