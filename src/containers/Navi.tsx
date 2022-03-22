import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from'@react-native-firebase/auth';

import _ from 'lodash';

import Login from './Login';
import Home from './Home';

interface Props {}

export default function Navi(props: Props) {
  const Stack = createStackNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    auth().onAuthStateChanged((user : any)=>{
      console.log(user);
      
      if(user){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn?
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
        :
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}
