import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import {TabView, ButtonGroup} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {updateUserInfoAction} from '../modules/updateUserInfo/actions';

import MyHeader from '../components/MyHeader';

interface Props {
    
}

interface User {
  displayName: string;
  email: string;
  type: number;
}

interface Params {
  type: number;
}

// FIXME: 이것을 redux로 리펙토링 하는게 맞고 어떻게 하는걸까?
const UserSetting = (props: Props) => {
  const ref = firestore().collection('user');
  const user: User = auth().currentUser;
  const dispatch = useDispatch();
  const {userInfo} = useSelector(state => state.updateUserInfo);

  async function insertUserInfo(params: Params) {
    await ref.add({
      displayName: user?.displayName,
      email: user.email,
      type: params.type,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <MyHeader></MyHeader>
      <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-around', alignItems: 'center'}}>
        <Button style={styles.button} title="꾸나" onPress={() => {
          console.log('@@ userInfo ==>', userInfo);
          
          // insertUserInfo({type:1});
          // dispatch(updateUserInfoAction.request({type: 1}));
        }}></Button>
        <Button style={styles.button} title="곰신" onPress={() => {
          insertUserInfo({type:2});
        }}></Button>
      </View>
    </SafeAreaView>
  );
};

export default UserSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
  }
});
