import { ActionTypes } from "../redux/constants/action-types";
const intialState = {
  isloding: false,
  catList: "",
  subcatList: "",
  error:"",
  user_name:''
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
        case ActionTypes.GET_SUBCAT_LIST:
          return { ...state,isloding:true };
        case ActionTypes.SET_SUBCAT_LIST:
          //console.log("ddd "+JSON.stringify(action.payload));
          return { ...state,isloding:false, subcatList: action.payload };
          case ActionTypes.SET_USER_NAME:
            //console.log("ddd "+JSON.stringify(action.payload));
            return { ...state, user_name: action.payload };
    default:
      return state;
  }
};