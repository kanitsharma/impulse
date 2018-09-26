import { takeLatest } from "redux-saga";
import { put } from "redux-saga/effects";
import actionSpreader from "../futils/actionSpreader";

function* initSaga() {
  yield put(actionSpreader("SAGA_RUNNING"));
}

export default function* coreSaga() {
  yield takeLatest("TOGGLE_POPUP", initSaga);
}
