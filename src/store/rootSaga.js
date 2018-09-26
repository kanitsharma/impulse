import { all } from "redux-saga/effects";
import coreSaga from "../core/saga";

export default function* rootSaga() {
  yield all([coreSaga()]);
}
