import firestore from '@react-native-firebase/firestore';
import {RequestPayloadType, ResponsePayloadType} from './types';

export const selectUserInfo = async (params:RequestPayloadType) => {
  const {collection} = await firestore().collection(params.tableNmae).where('uid', '==', params.uid).get();

  const userInfo: ResponsePayloadType = collection.docs[0]._data;
};

return userInfo;