import { takeEvery, put ,call} from 'redux-saga/effects'
import { ActionTypes } from "../redux/constants/action-types";
import { setCatList,errorCatList,setSubCatList} from './categoryaction';
import axios from 'axios';
import { BASE_URL_ENV, ASSETS_DIR } from '@env';

function* getAllUser(action) {
  yield axios.get('http://leadadmin.appsfiber.com/adminapi/manage_admin_users.php');
}


function* fetchCat(action) {
  //alert(JSON.stringify(action))
  try {
    //alert("www");
    const user = yield axios.get(`${BASE_URL_ENV}allcategory`);
    //alert("uuu "+JSON.stringify(user));
    yield put(setCatList(user))
  } catch (e) {
    yield put(errorCatList(e.message))
  }
}


function* fetchSubCat(action) {
  //alert(`${BASE_URL_ENV}allsubcategoryapi/${action.payload}`)
  //console.log(`${BASE_URL_ENV}allsubcategoryapi/${action.payload}`);
  try {
    //alert("www");
    const user = yield axios.get(`${BASE_URL_ENV}allsubcategoryapi/${action.payload}`);
    //alert("uuu "+JSON.stringify(user));
    yield put(setSubCatList(user));
  } catch (e) {
    yield put(errorCatList(e.message));
  }
}

function* catSaga() {
    yield takeEvery(ActionTypes.GET_CAT_LIST, fetchCat)
    yield takeEvery(ActionTypes.GET_SUBCAT_LIST, fetchSubCat)
}

export default catSaga;