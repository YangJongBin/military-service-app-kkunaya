import {call, put, takeLatest} from 'redux-saga/effects';

import {ResponsePayloadType} from './types';
import {onGoogleButtonPress} from './funcs';
import {loginAction, LOGIN} from './actions';

function* saga(action: ReturnType<typeof loginAction.request>) {
  try {
    const response: ResponsePayloadType = yield call(onGoogleButtonPress);

    yield put(loginAction.success(response));
  } catch (error) {
    yield put(loginAction.failure(error));
  }
}

export function* loginSaga() {
  yield takeLatest(LOGIN, saga);
}

export { loginSaga as default };