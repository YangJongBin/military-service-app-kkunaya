import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';

import login, {loginSaga} from './login';
import updateUserInfo, {updateUserInfoSaga} from './updateUserInfo';
import selectUserInfo, {selectUserInfoSaga} from './selectUserInfo';

const rootReducer = combineReducers({
  login,
  updateUserInfo,
  selectUserInfo
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
export function* rootSaga(){
  yield all([loginSaga(), updateUserInfoSaga(), selectUserInfoSaga()]);
}
