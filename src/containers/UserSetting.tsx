import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import {TabView, ButtonGroup} from 'react-native-elements';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import MyHeader from '../components/MyHeader';

interface Props {
    
}

interface User {
  displayName: string;
  email: string;
}

interface Params {
  type: number;
}

// FIXME: 이것을 redux로 리펙토링 하는게 맞고 어떻게 하는걸까?
const UserSetting = (props: Props) => {
  const ref = firestore().collection('user');
  const user: User = auth().currentUser;

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
      <Button title="test" onPress={() => {
        insertUserInfo({type:1});
      }}></Button>
    </SafeAreaView>
  );
};

export default UserSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});
