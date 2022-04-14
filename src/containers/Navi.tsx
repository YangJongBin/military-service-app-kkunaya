import React, {useState, useEffect, useRef} from 'react';
import asnycStorage from '@react-native-async-storage/async-storage';
import 'react-native-gesture-handler';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import auth from'@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import _ from 'lodash';

import Spinner from './Spinner';
import Login from './Login';
import Home from './Home';
import UserSetting from './UserSetting';
import SoldierList from './SoldierList';

interface Props {}

interface User {
  displayName: string;
  email: string;
  type: number;
}

export default function Navi(props: Props) {
  const Stack = createStackNavigator();
  const navigationRef = useRef(null);

  useEffect(() => {
    // 로그인 유무
    auth().onAuthStateChanged((user: User)=>{
      if(user){
        // User 데이터베이스 탐색
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        firestore().collection('user').where('email', '==', user.email).get().then(collection => {
          if(collection.size === 0){
            navigationRef.current.navigate('UserSetting');
          }else{
            const userInfo: User = collection.docs[0]._data; // 유저 정보

            // 0: none, 1: soldier , 2: gomshin 
            if(userInfo.type === 1){
              navigationRef.current.navigate('Home');
              
            }else if(userInfo.type === 2){
              asnycStorage.getItem('selectedSoldier').then((value: string)=>{
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
