import { ActionTypes } from "../redux/constants/action-types";

export const setUserData = (data) => {
    //alert(JSON.stringify(data))
  return {
    type: ActionTypes.SET_USER_DATA,
    payload: data,
  };
};


export const getUserLogin= (data) => {
  //alert(JSON.stringify(data))
return {
  type: ActionTypes.GET_USER_LOGIN,
  payload: data,
};
};

export const errUserLogin= (data) => {
  //alert(JSON.stringify(data))
return {
  type: ActionTypes.ERR_USER_LOGIN,
  payload: data,
};
};



export const errorProductList = (data) => {
  //alert(JSON.stringify(data))
return {
  type: ActionTypes.SET_PRODUCT_LIST_ERROR,
  payload: data,
};
};

export const userNameD = (data) => {
  //alert(JSON.stringify(data))
return {
  type: ActionTypes.USER_NAME_D,
  payload: data,
};
};