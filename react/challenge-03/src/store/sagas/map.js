import { put, select } from "redux-saga/effects";
import { getUsers } from "../selectors/selectors";
import axios from "../../axios-github";
import * as actionTypes from "../actions/actionTypes";
import { toast } from "react-toastify";

export function* fetchGithubRepo(action) {
  try {
    const existentUsers = yield select(getUsers);
    const existentUser = yield existentUsers.reduce(
      (prev, curr) => (curr.login === action.payload.user.name ? curr : prev),
      null
    );

    if (!existentUser) {
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

        yield put({
          type: actionTypes.FETCH_GITHUB_REPO_SUCCESS,
          payload: { user }
        });

        toast.success("User found!");
      } else {
        yield put({
          type: actionTypes.FETCH_GITHUB_REPO_FAILED,
          payload: { error: "User not found" }
        });
        toast.error("User not found!");
      }
    } else {
      yield put({
        type: actionTypes.FETCH_GITHUB_REPO_FAILED,
        payload: { error: "User already added to the list!" }
      });
      toast.error("User already added to the list!");
    }
  } catch (error) {
    yield put({
      type: actionTypes.FETCH_GITHUB_REPO_FAILED,
      payload: { error }
    });
    toast.error("Something bad ocurred!");
  }
}
