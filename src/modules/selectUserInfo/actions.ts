import {createAsyncAction} from 'typesafe-actions';
import {AxiosResponse, AxiosError} from 'axios';

import {RequestPayloadType, ResponsePayloadType} from './types';

// 로그인 액션 타입
export const SELECT_USERINFO = 'SELECT_USERINFO' as const;
export const SELECT_USERINFO_SUCCESS = 'SELECT_USERINFO_SUCCESS' as const;
export const SELECT_USERINFO_FAILURE = 'SELECT_USERINFO_FAILURE' as const;

//비동기 액션 생성 함수 생성
export const selectUserInfoAction = createAsyncAction(
  SELECT_USERINFO,
  SELECT_USERINFO_SUCCESS,
  SELECT_USERINFO_FAILURE,
)<RequestPayloadType, AxiosResponse<ResponsePayloadType>, AxiosError>();