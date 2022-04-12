import {call, put} from 'redux-saga/effects';
import {getAsyncInit, RequestPayloadType, ResponsePayloadType, onGoogleButtonPress, LOGIN_REQUEST} from '../modules/login';

function* saga(action: ReturnType<typeof getAsyncInit.request>) {
  try {
    const response: ResponsePayloadType = yield call(onGoogleButtonPress);

    yield put(getAsyncInit.success(response));
  } catch (error) {
    yield put(getAsyncInit.failure(error));
  }
}

export function* testSaga() {
  yield takeLatest(LOGIN_REQUEST, saga);
}

export { testSaga as default };