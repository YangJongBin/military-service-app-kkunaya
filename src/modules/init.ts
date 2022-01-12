import {AxiosResponse, AxiosError} from 'axios';
import {
  createReducer,
  createAction,
  createAsyncAction,
  ActionType,
} from 'typesafe-actions';

// 1. action type
export const INIT = 'INIT' as const;
export const INIT_REQUEST = 'INIT_REQUEST' as const;
export const INIT_SUCCESS = 'INIT_SUCCESS' as const;
export const INIT_FAILURE = 'INIT_FAILURE' as const;

// FIXME: Async action
interface RequestPayloadType {}
interface ResponsePayloadType {}

// FIXME: Async action
export const getAsyncInit = createAsyncAction(
  INIT_REQUEST,
  INIT_SUCCESS,
  INIT_FAILURE,
)<RequestPayloadType, AxiosResponse<ResponsePayloadType>, AxiosError>();

// 2. action func
export const getInit = createAction(INIT, (value: string) => value)();

// 3. ready action type
const actions = {getInit};
type InitAction = ActionType<typeof actions>;

// 4. ready state type
export type InitState = {value: string};

// 5. state
const initState: InitState = {
  value: 'Hi Redux!',
};

// 6. reducer
const reducer = createReducer<InitState, InitAction>(initState, {
  [INIT]: (state, action) => ({
    value: state.value + ' success',
  }),
});

export default reducer;
