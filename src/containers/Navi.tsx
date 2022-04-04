import React, {useState, useEffect, useRef} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import auth from'@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import _ from 'lodash';

import Spinner from './Spinner';
import Login from './Login';
import Home from './Home';
import UserSetting from './UserSetting';
import { forFade } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators';

interface Props {}

interface User {
  displayName: string;
  email: string;
  type: number;
}

export default function Navi(props: Props) {
  const Stack = createStackNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userType, setUserType] = useState<number>(0); // 0: none, 1: soldier , 2: gomshin
  const [naviTarget, setNaviTarget] = useState<string>('Login');
  const navigationRef = useRef(null);

  useEffect(() => {
    auth().onAuthStateChanged((user: User)=>{
      if(user){
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        firestore().collection('user').where('email', '==', user.email).get().then(collection => {
          if(collection.size === 0){
            navigationRef.current.navigate('UserSetting');
          }else{
            const resultUserInfo: User = collection.docs[0]._data;
            
            navigationRef.current.navigate('Home');
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
