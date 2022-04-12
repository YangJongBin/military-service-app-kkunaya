import {
  createReducer,
  createAction,
  ActionType,
} from 'typesafe-actions';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {AxiosResponse, AxiosError} from 'axios';

// interface 
export interface RequestPayloadType {}
export interface ResponsePayloadType {}


// action type
export const LOGIN = 'LOGIN' as const;
export const LOGIN_REQUEST = 'LOGIN_REQUEST' as const;
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS' as const;
export const LOGIN_FAILURE = 'LOGIN_FAILURE' as const;

// creater action
export const loginAction = createAction(LOGIN)<string[]>();

export const getAsyncInit = createAsyncAction(
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
)<RequestPayloadType, AxiosResponse<ResponsePayloadType>, AxiosError>();
  
// func
export const onGoogleButtonPress = async () => {
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
  return auth().signInWithCredential(googleCredential);
};
  
// ready action type
const actions = {loginAction};
  type InitAction = ActionType<typeof actions>;
  
// 4. ready state type
export type InitState = {
    isLoading: boolean,
  };
  
// 5. state
const initState: InitState = {
  isLoading: false,
};

// 6. reducer
const reducer = createReducer<InitState, InitAction>(initState, {
  [LOGIN_REQUEST]: (state, action) => ({
    ...state,
    isLoading: true,
  }),
  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    isLoading: false,
  }),
  [LOGIN_FAILURE]: (state, action) => ({
    ...state,
    isLoading: false,
  }),
});

export default reducer;
