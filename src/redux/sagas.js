import { all } from "redux-saga/effects";
import catSaga from "../redux/categorySaga";
import productSaga from "./productSaga";
import userSaga from "./userSaga"
export default function* rootSagas() {
  yield all([catSaga(),productSaga(),userSaga()]);
}
