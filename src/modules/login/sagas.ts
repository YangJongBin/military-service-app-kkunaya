import {call, put, takeLatest} from 'redux-saga/effects';

import {ResponsePayloadType} from './types';
import {LOGIN_REQUEST} from './actions';
import {onGoogleButtonPress} from './funcs';
import {testAction} from './actions';

function* saga(action: ReturnType<typeof getAsyncInit.request>) {
  try {
    const response: ResponsePayloadType = yield call(onGoogleButtonPress);

    yield put(testAction.success(response));
  } catch (error) {
    yield put(testAction.failure(error));
  }
}

export function* testSaga() {
  yield takeLatest(LOGIN_REQUEST, saga);
}

export { testSaga as default };