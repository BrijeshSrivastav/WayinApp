import { takeEvery, put ,call} from 'redux-saga/effects'
import { ActionTypes } from "../redux/constants/action-types";
import { setCatList,errorCatList} from './categoryaction';
import axios from 'axios';


function* getAllUser(action) {
  yield axios.get('http://leadadmin.appsfiber.com/adminapi/manage_admin_users.php');
}


function* fetchCat(action) {
  //alert(JSON.stringify(action))
  try {
    //alert("www");
    const user = yield axios.get('https://askwayin.com/api/allcategory');
    //alert("uuu "+JSON.stringify(user));
    yield put(setCatList(user))
  } catch (e) {
    yield put(errorCatList(e.message))
  }
}



function* catSaga() {
    yield takeEvery(ActionTypes.GET_CAT_LIST, fetchCat)
    //yield takeEvery(SEARCH_PRODUCT, searchProducts)

}

export default catSaga;