import { takeEvery, put ,call} from 'redux-saga/effects'
import { ActionTypes } from "../redux/constants/action-types";
import { setUserData,errUserLogin} from './useraction';
import axios from 'axios';
import { BASE_URL_ENV, ASSETS_DIR } from '@env';

function* getAllUser(action) {
  yield axios.get('http://leadadmin.appsfiber.com/adminapi/manage_admin_users.php');
}


function* userLogin(action) {
  //alert(JSON.stringify(action.payload))
  try {
    //alert("www");
    //const user = yield axios.post(`${BASE_URL_ENV}user/login`,action.payload);
    const user =yield axios.post(`${BASE_URL_ENV}user/login`,action.payload)
    //alert("uuu "+JSON.stringify(user));
    yield put(setUserData(user))
  } catch (e) {
    yield put(errUserLogin(e.message))
  }
}



function* userSaga() {
    yield takeEvery(ActionTypes.GET_USER_LOGIN, userLogin)
   
}

export default userSaga;