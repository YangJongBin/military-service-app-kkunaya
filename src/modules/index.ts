import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';

import login, {loginSaga} from './login';
import updateUserInfo, {updateUserInfoSaga} from './updateUserInfo';

const rootReducer = combineReducers({
  login,
  updateUserInfo
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
export function* rootSaga(){
  yield all([loginSaga(), updateUserInfoSaga()]);
}
