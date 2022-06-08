import { ActionSheetIOS } from 'react-native';
import {createReducer} from 'typesafe-actions';
import {UPDATEUSERINFO, UPDATEUSERINFO_SUCCESS, UPDATEUSERINFO_FAILURE } from './actions';

interface InitState {
  isLoading: boolean;
  userInfo: object;
  type: number;
}

const initState: InitState = {
  isLoading: false,
  type: 0,
  userInfo: {}
};
  
const reducer = createReducer(initState, {
  [UPDATEUSERINFO]: (state, action) => ({
    ...state,
    isLoading: true,
    userInfo: {}
  }),
  [UPDATEUSERINFO_SUCCESS]: (state, action) => ({
    ...state,
    isLoading: false,
    userInfo: action.payload
  }),
  [UPDATEUSERINFO_FAILURE]: (state, action) => ({
    ...state,
    isLoading: false,
    userInfo: {}
  }),
});
  
export default reducer;