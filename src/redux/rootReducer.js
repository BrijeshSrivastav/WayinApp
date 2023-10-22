import {combineReducers} from 'redux';
import { catReducer } from '../redux/categoryReducer';
import { productReducer } from '../redux/productReducer';
import {userReducer} from '../redux/userReducer';
export default combineReducers({
    catReducer,
    productReducer,
    userReducer
})