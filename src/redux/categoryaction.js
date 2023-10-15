import { ActionTypes } from "../redux/constants/action-types";

export const setCatList = (data) => {
    //alert(JSON.stringify(data))
  return {
    type: ActionTypes.SET_CAT_LIST,
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