import React, {useState, useEffect, useRef} from 'react';
import asnycStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';

// actions
import {updateUserInfoAction} from '../modules/updateUserInfo/actions';

import auth from'@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import _ from 'lodash';

import Spinner from './Spinner';
import Login from './Login';
import Home from './Home';
import UserSetting from './UserSetting';
import SoldierList from './SoldierList';

interface User {
  displayName: string;
  email: string;
  type: number;
  uid: string;
}

export default function Navi() {
  const Stack = createStackNavigator();
  const navigationRef = useRef(null);
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.updateUserInfo);

  useEffect(() => {
    // 로그인 유무
    auth().onAuthStateChanged((user: User)=>{
      console.log('@@ user: ', user); // FIXME: delete
      
      if(user){
        // 유저 정보 global state에 저장
        dispatch(updateUserInfoAction.request({
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
          type: 0,
        }));

        // User 데이터베이스 탐색
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        firestore().collection('user').where('uid', '==', user.uid).get().then(collection => {
          if(collection.size === 0){
            navigationRef.current.navigate('UserSetting');

          }else{
            const userInfo: User = collection.docs[0]._data; 

            console.log('@@ User type ==>', userInfo.type); // FIXME: delete

            // 0: none, 1: soldier , 2: gomshin 
            if(userInfo.type === 1){
              navigationRef.current.navigate('Home');
              
            }else if(userInfo.type === 2){
              // 이미 선택한 유저가 있을 경우를 체크.
              asnycStorage.getItem('selectedSoldierUid').then((value: string)=>{
                console.log('@@ Selected Soldier UID ==>', value); // FIXME: delete
                
                navigationRef.current.navigate(_.isEmpty(value) ? 'SoldierList': 'Home');
              });
            }
          }
        });
      }else{
        navigationRef.current.navigate('Login');
      }
    });
  }, []);

  // TODO: 사용자가 곰신일 경우 ( type: 2 ) 선택된 군인이 있는지 판단.
  useEffect(() => {
    if(!_.isEmpty(userInfo.selectedSoldierUid)){
      navigationRef.current.navigate('Home');
    }
  }, [userInfo]);

  const forFade = ({current}: any) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Spinner">
        <Stack.Screen
          name="Spinner"
          component={Spinner}
          options={{
            headerShown: false,
            gestureEnabled: false,
            cardStyleInterpolator:forFade,
          }}></Stack.Screen>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            gestureEnabled: false,
            cardStyleInterpolator:forFade,
          }}></Stack.Screen>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            gestureEnabled: false,
            cardStyleInterpolator:forFade,
          }}></Stack.Screen>
        <Stack.Screen
          name="UserSetting"
          component={UserSetting}
          options={{
            headerShown: false,
            gestureEnabled: false,
            cardStyleInterpolator:forFade,
          }}></Stack.Screen>
        <Stack.Screen
          name="SoldierList"
          component={SoldierList}
          options={{
            headerShown: false,
            gestureEnabled: false,
            cardStyleInterpolator:forFade,
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
