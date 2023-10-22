import { ActionTypes } from "../redux/constants/action-types";

export const setCatList = (data) => {
    //alert(JSON.stringify(data))
  return {
    type: ActionTypes.SET_CAT_LIST,
    payload: data,
  };
};

export const setSubCatList = (data) => {
  //alert(JSON.stringify(data))
return {
  type: ActionTypes.SET_SUBCAT_LIST,
  payload: data,
};
};
export const getSubCatList = (data) => {
  //alert(JSON.stringify(data))
return {
  type: ActionTypes.GET_SUBCAT_LIST,
  payload: data,
};
};

export const getCatList = (data) => {
  //alert(JSON.stringify(data))
return {
  type: ActionTypes.GET_CAT_LIST,
  payload: data,
};
};

export const errorCatList = (data) => {
  //alert(JSON.stringify(data))
return {
  type: ActionTypes.SET_CAT_LIST,
  payload: data,
};
};

export const setUserName = (data) => {
  //alert(JSON.stringify(data))
return {
  type: ActionTypes.SET_USER_NAME,
  payload: data,
};
};