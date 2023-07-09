import {
  SHOW_ALERT,
  CLEAR_ALERT,
  REGISTER_BEGIN,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  Login_BEGIN,
  Login_ERROR,
  Login_SUCCESS,
  SHOW_SIDE_BAR,
  LOGOUT
} from "./actions";

const reducer = (state, action) => {
  if (action.type === SHOW_ALERT) {
    return {
      ...state,
      show_alert: true,
      alertType: "alert-danger",
      alertStatment: "please enter all values"
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      show_alert: false,
      alertType: "",
      alertStatment: ""
    };
  }
  if (action.type === REGISTER_BEGIN) {
    return {
      ...state,
      IsLoadingL: true
    };
  }
  if (action.type === REGISTER_SUCCESS) {
    return {
      ...state,
      IsLoadingL: false,
      alertType: "alert-success",
      alertStatment: "user has been registered ..",
      user: action.payload.user,
      token: action.payload.token,
      show_alert: true
    };
  }
  if (action.type === REGISTER_ERROR) {
    return {
      ...state,
      IsLoadingL: false,
      alertType: "alert-danger",
      alertStatment: "ther is erro happen when register ..",
      show_alert: true
    };
  }

  // userLogin
  if (action.type === Login_BEGIN) {
    return {
      ...state,
      IsLoadingL: true
    };
  }
  if (action.type === Login_SUCCESS) {
    return {
      ...state,
      IsLoadingL: false,
      alertType: "alert-success",
      alertStatment: "user has been Signed ..",
      user: action.payload.user,
      token: action.payload.token,
      show_alert: true
    };
  }
  if (action.type === Login_ERROR) {
    return {
      ...state,
      IsLoadingL: false,
      alertType: "alert-danger",
      alertStatment: "Error Happned When Login In ..",
      show_alert: true
    };
    
  }

  if (action.type === SHOW_SIDE_BAR) {
    return {
      ...state,
      show_sidebar:!state.show_sidebar
    };
}
if (action.type === LOGOUT) {
  return {
    IsLoading:false,
  show_alert:false,
      alertType:'',
      alertStatment:'',
      user: null,
      token:null,
      show_sidebar :false
  };
}

};
export default reducer;
