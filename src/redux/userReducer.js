import { ActionTypes } from "../redux/constants/action-types";
const intialState = {
  isloding: false,
  userdata: "",
  error:"",
  username_d:""
};

export const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER_LOGIN:
      return { ...state, isloding: true };
    case ActionTypes.SET_USER_DATA:
      return { ...state, 
        isloding:false,
        userdata: action.payload }; 

        case ActionTypes.ERR_USER_LOGIN:
          return { ...state, 
            isloding:false,
            error: action.payload }; 

            case ActionTypes.USER_NAME_D:
              return { ...state, 
               username_d: action.payload }; 
    default:
      return state;
  }
};