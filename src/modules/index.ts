import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';

import login, {loginSaga} from './login';

const rootReducer = combineReducers({
  login
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
export function* rootSaga(){
  yield all([loginSaga()]);
}
