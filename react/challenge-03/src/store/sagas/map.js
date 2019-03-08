import { put } from "redux-saga/effects";
import axios from "../../axios-github";
import * as actionTypes from "../actions/actionTypes";
import { toast } from "react-toastify";

export function* fetchGithubRepo(action) {
  try {
    const response = yield axios.get(`/users?q=${action.payload.user.name}`);
    const fetchedUser = response.data.items.reduce((previous, current) => {
      return current.login === action.payload.user.name
        ? { ...current }
        : previous;
    }, null);

    if (fetchedUser) {
      const user = {
        login: fetchedUser.login,
        avatarUrl: fetchedUser.avatar_url,
        latitude: action.payload.coords.latitude,
        longitude: action.payload.coords.longitude
      };
      console.log(user);
      yield put({
        type: actionTypes.FETCH_GITHUB_REPO_SUCCESS,
        payload: { user }
      });

      toast.success("Everything was alright!");
    } else {
      yield put({
        type: actionTypes.FETCH_GITHUB_REPO_FAILED,
        payload: { error: "User not found" }
      });
      toast.error("User not found!");
    }
  } catch (error) {
    yield put({
      type: actionTypes.FETCH_GITHUB_REPO_FAILED,
      payload: { error }
    });
    toast.error("Something bad ocurred!");
    console.log(error);
  }
}
