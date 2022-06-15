import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import asyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';

// action
import {updateUserInfoAction} from '../modules/updateUserInfo/actions';

// FIXME: 솔져 정보
interface SoldierInfo {
  displayName: string
  email: string
  type: number
}

interface UserInfo {
  displayName: string
  email: string
  type: number
  selectedSoldierUid: string
}

const SoldierList = () => {
  const { userInfo } = useSelector(state => state.updateUserInfo);
  const dispatch = useDispatch();
  
  
  return (
    <SafeAreaView>
      <Button title={'TEST SELECTED SOLDIER BUTTON'} onPress={()=>{
        
        asyncStorage.setItem('selectedSoldierUid', 'TEST UID'); // FIXME: 사용자 uid 저장 예정

        console.log('@@Select soldier ==>', userInfo);

        const newUserInfo: UserInfo = {
          displayName: userInfo.displayName,
          email: userInfo.email,
          type: userInfo.type,
          selectedSoldierUid: 'TEST UID'
        };
        
        // set state selected soldier info
        dispatch(updateUserInfoAction.request(newUserInfo));
      }}></Button>
    </SafeAreaView>
  );
};

export default SoldierList;

const styles = StyleSheet.create({});
