import {createAsyncAction} from 'typesafe-actions';
import {AxiosResponse, AxiosError} from 'axios';

import {RequestPayloadType, ResponsePayloadType} from './types';

// 로그인 액션 타입
export const UPDATEUSERINFO = 'UPDATEUSERINFO' as const;
export const UPDATEUSERINFO_SUCCESS = 'UPDATEUSERINFO_SUCCESS' as const;
export const UPDATEUSERINFO_FAILURE = 'UPDATEUSERINFO_FAILURE' as const;

//비동기 액션 생성 함수 생성
export const updateUserInfoAction = createAsyncAction(
  UPDATEUSERINFO,
  UPDATEUSERINFO_SUCCESS,
  UPDATEUSERINFO_FAILURE,
)<RequestPayloadType, AxiosResponse<ResponsePayloadType>, AxiosError>();