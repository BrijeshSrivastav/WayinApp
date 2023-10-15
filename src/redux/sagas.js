import { all } from "redux-saga/effects";
import catSaga from "../redux/categorySaga";

export default function* rootSagas() {
  yield all([catSaga()]);
}
