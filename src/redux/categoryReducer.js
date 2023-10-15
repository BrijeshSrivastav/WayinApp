import { ActionTypes } from "../redux/constants/action-types";
const intialState = {
  isloding: false,
  catList: "",
  error:"",
};

export const catReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_CAT_LIST:
      return { ...state, isloding: true };
    case ActionTypes.SET_CAT_LIST:
      return { ...state, 
        isloding:false,
        catList: action.payload };
      case ActionTypes.SET_CAT_LIST_ERROR:
        return { ...state,isloding:false, error: action.payload };
    default:
      return state;
  }
};