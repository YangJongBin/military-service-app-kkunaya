import {call, put, takeLatest} from 'redux-saga/effects';

import {ResponsePayloadType} from './types';
import {selectUserInfo} from './funcs';
import {selectUserInfoAction, SELECT_USERINFO} from './actions';

function* saga(action: ReturnType<typeof selectUserInfoAction.request>) {
  try {
    const response: ResponsePayloadType = yield call(selectUserInfo, action.payload);

    yield put(selectUserInfoAction.success(response));
  } catch (error) {
    yield put(selectUserInfoAction.failure(error));
  }
}

export function* selectUserInfoSaga() {
  yield takeLatest(SELECT_USERINFO, saga);
}

export { selectUserInfoSaga as default };