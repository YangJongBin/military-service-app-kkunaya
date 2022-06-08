import {call, put, takeLatest} from 'redux-saga/effects';

import {ResponsePayloadType} from './types';
import {updateUserInfo} from './funcs';
import {updateUserInfoAction, UPDATEUSERINFO} from './actions';

function* saga(action: ReturnType<typeof updateUserInfoAction.request>) {
  try {
    const response: ResponsePayloadType = yield call(updateUserInfo, action.payload);

    yield put(updateUserInfoAction.success(response));
  } catch (error) {
    yield put(updateUserInfoAction.failure(error));
  }
}

export function* updateUserInfoSaga() {
  yield takeLatest(UPDATEUSERINFO, saga);
}

export { updateUserInfoSaga as default };