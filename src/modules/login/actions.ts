import {createAsyncAction} from 'typesafe-actions';
import {AxiosResponse, AxiosError} from 'axios';

import {RequestPayloadType, ResponsePayloadType} from './types';

// 액션 타입
export const LOGIN_REQUEST = 'LOGIN_REQUEST' as const;
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS' as const;
export const LOGIN_FAILURE = 'LOGIN_FAILURE' as const;

//비동기 액션 생성 함수 생성
export const testAction = createAsyncAction(
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
)<RequestPayloadType, AxiosResponse<ResponsePayloadType>, AxiosError>();