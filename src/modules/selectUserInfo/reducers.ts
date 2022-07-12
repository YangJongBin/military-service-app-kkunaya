import {createReducer} from 'typesafe-actions';
import {SELECT_USERINFO, SELECT_USERINFO_SUCCESS,SELECT_USERINFO_FAILURE} from './actions';
import {ResponsePayloadType} from './types';

interface InitState {
    isLoading: boolean;
    userInfo: ResponsePayloadType;
}

const initState: InitState = {
  isLoading: false,
  userInfo: {}
};
  
const reducer = createReducer(initState, {
  [SELECT_USERINFO]: (state, action) => ({
    ...state,
    isLoading: true,
  }),
  [SELECT_USERINFO_SUCCESS]: (state, action) => ({
    ...state,
    isLoading: false,
    userInfo: action.payload
  }),
  [SELECT_USERINFO_FAILURE]: (state, action) => ({
    ...state,
    isLoading: false,
  }),
});
  
export default reducer;