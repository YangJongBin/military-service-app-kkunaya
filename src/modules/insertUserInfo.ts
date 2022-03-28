import {AxiosResponse, AxiosError} from 'axios';
import {
  createReducer,
  createAction,
  createAsyncAction,
  ActionType,
} from 'typesafe-actions';
import firestore from '@react-native-firebase/firestore';

// 1. action type
export const INSERT_USERINFO = 'INSERT_USERINFO' as const;
export const INSERT_USERINFO_REQUEST = 'INSERT_USERINFO_REQUEST' as const;
export const INSERT_USERINFO_SUCCESS = 'INSERT_USERINFO_SUCCESS' as const;
export const INSERT_USERINFO_FAILURE = 'INSERT_USERINFO_FAILURE' as const;

// Async action interface
interface RequestPayloadType {
  disaplyName: string;
  email: string;
  type: number;
}
interface ResponsePayloadType {
  result: boolean
}

// Async action
export const insertAsyncUserInfo = createAsyncAction(
  INSERT_USERINFO_REQUEST,
  INSERT_USERINFO_SUCCESS,
  INSERT_USERINFO_FAILURE,
)<RequestPayloadType, AxiosResponse<ResponsePayloadType>, AxiosError>();

// 3. ready action type
const actions = {
  insertAsyncUserInfo
};
type InitAction = ActionType<typeof actions>;

// 4. ready state type
export type InitState = {
  value: string
};

// 5. state
const initState: InitState = {
  value: 'Hi Redux!',
};

// 6. reducer
const reducer = createReducer<InitState, InitAction>(initState, {
  [INSERT_USERINFO_REQUEST]: (state, action) => ({
    ...state,
    value: state.value + ' success',
  }),
});

export default reducer;
