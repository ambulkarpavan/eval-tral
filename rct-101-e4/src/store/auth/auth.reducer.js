import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT } from "./auth.types";

// Note: Do not update/change the initial state
export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};

export const authReducer = (state = authInitalState, {type, payload}) => {

  switch(type){
    case AUTH_SIGN_IN_LOADING: {
      return{
             ...state,
             
             loading:true,
             error:false,
      }
    }  
    case AUTH_SIGN_IN_SUCCESS: {
      return{
          ...state,
          loading:false,
          error:false,
          data:{
          ...state.data,
            isAuthenticated:true,
            token:payload.token,
          }
        
      }
    }  
    case AUTH_SIGN_IN_ERROR: {
      return{
        ...state,
        loading:false,
        error:true,
        data:{
          ...state.data,
            isAuthenticated:false,
           
          }
      }
    }  
    case AUTH_SIGN_OUT: {
      return{
      ...state,
      data:{
        ...state.data,
          isAuthenticated:false,
          token:"",
        }
      }
    }  
    default: {
      return state;
    }
  }
 
 
};
