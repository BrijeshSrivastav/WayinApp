import { takeEvery, put ,call} from 'redux-saga/effects'
import { ActionTypes } from "../redux/constants/action-types";
import { setCatList,errorCatList,setSubCatList} from './categoryaction';
import axios from 'axios';
import { BASE_URL_ENV, ASSETS_DIR } from '@env';
import { errorProductList, setProductList } from './productaction';

function* getAllUser(action) {
  yield axios.get('http://leadadmin.appsfiber.com/adminapi/manage_admin_users.php');
}


function* fetchProduct(action) {
  //alert(JSON.stringify(action))
 // console.log(`${BASE_URL_ENV}allproduct/${action.payload}`);
  try {
    //alert("www");
    //const user = yield axios.get(`${BASE_URL_ENV}allproduct/${action.payload}`);
    const user = yield axios.get(`${BASE_URL_ENV}allproduct/`);
    //alert("uuu "+JSON.stringify(user));
    yield put(setProductList(user));
  } catch (e) {
    yield put(errorProductList(e.message));
  }
}




function* productSaga() {
    yield takeEvery(ActionTypes.GET_PRODUCT_LIST, fetchProduct);
}

export default productSaga;