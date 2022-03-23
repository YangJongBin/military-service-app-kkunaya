import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

interface Props {
    
}

const UserSetting = (props: Props) => {
  return (
    <SafeAreaView>
      <Button title="test" onPress={()=>{
        const user = auth().currentUser;

        console.log(user);

        auth().currentUser?.updateProfile({
          type: 'soldier'
        });
      }}></Button>
    </SafeAreaView>
  );
};

export default UserSetting;

const styles = StyleSheet.create({});
