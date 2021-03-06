import { takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { fetchGithubRepo } from "./map";

export function* watchMap() {
  yield takeLatest(actionTypes.FETCH_GITHUB_REPO_START, fetchGithubRepo);
}
