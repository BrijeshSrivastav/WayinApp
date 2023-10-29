import { ActionTypes } from "../redux/constants/action-types";

export const setProductList = (data) => {
    //alert(JSON.stringify(data))
  return {
    type: ActionTypes.SET_PRODUCT_LIST,
    payload: data,
  };
};

export const setProductDetail = (data) => {
  //alert(JSON.stringify(data))
return {
  type: ActionTypes.SET_PRODUCT_DEATAIL,
  payload: data,
};
};



export const getProductList = (data) => {
  //alert(JSON.stringify(data))
return {
  type: ActionTypes.GET_PRODUCT_LIST,
  payload: data,
};
};



export const getProductDetail = (data) => {
  //alert(JSON.stringify(data))
return {
  type: ActionTypes.GET_PRODUCT_DEATAIL,
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

export const errorProductDetail= (data) => {
  //alert(JSON.stringify(data))
return {
  type: ActionTypes.SET_PRODUCT_DEATAIL_ERROR,
  payload: data,
};
};