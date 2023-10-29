import { ActionTypes } from "../redux/constants/action-types";
const intialState = {
  isloding: false,
  productList: "",
  productDetail: "",
  error_Detail:"",
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
       
        case ActionTypes.GET_PRODUCT_DEATAIL:
      return { ...state, isloding: true };
    case ActionTypes.SET_PRODUCT_DEATAIL:
      return { ...state, 
        isloding:false,
        productDetail: action.payload };
      case ActionTypes.SET_PRODUCT_DEATAIL_ERROR:
        return { ...state,isloding:false, error_Detail: action.payload };
    default:
      return state;
  }
};