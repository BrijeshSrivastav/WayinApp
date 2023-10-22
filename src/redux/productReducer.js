import { ActionTypes } from "../redux/constants/action-types";
const intialState = {
  isloding: false,
  productList: "",
  error:"",
};

export const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCT_LIST:
      return { ...state, isloding: true };
    case ActionTypes.SET_PRODUCT_LIST:
      return { ...state, 
        isloding:false,
        productList: action.payload };
      case ActionTypes.SET_PRODUCT_LIST_ERROR:
        return { ...state,isloding:false, error: action.payload };
       
    default:
      return state;
  }
};