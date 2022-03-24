import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

interface Props {
    
}

interface User {
  displayName: string;
  email: string;
}

interface Params {
  type: number;
}

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
    <SafeAreaView>
      <Button title="test" onPress={()=>{
        console.log(user);

        insertUserInfo({
          type: 1
        });
      }}></Button>
    </SafeAreaView>
  );
};

export default UserSetting;

const styles = StyleSheet.create({});
