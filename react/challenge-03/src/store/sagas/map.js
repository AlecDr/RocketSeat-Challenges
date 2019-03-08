import { put } from "redux-saga/effects";
import axios from "../../axios-github";
import * as actionTypes from "../actions/actionTypes";
import { toast } from "react-toastify";

export function* fetchGithubRepo(action) {
  try {
    const response = yield axios.get("/users?q=AlecDr");
    const fetchedUser = response.data.items[0];
    const user = {
      name: action.payload.user.name,
      login: fetchedUser.login,
      avatarUrl: fetchedUser.avatar_url
    };

    yield put({
      type: actionTypes.FETCH_GITHUB_REPO_SUCCESS,
      payload: { user }
    });

    toast.success("Everything was alright!");
  } catch (error) {
    yield put({
      type: actionTypes.FETCH_GITHUB_REPO_FAILED,
      payload: { error }
    });
    console.log(error);
  }
}
