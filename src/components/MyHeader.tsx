import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

interface Props {
    
}

const MyHeader = (props: Props) => {
  return (
    <View style={styles.header}>
      <Button title="button" onPress={()=>auth().signOut()}></Button>
    </View>
  );
};

export default MyHeader;

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height:50,
  },
  title: {
  }
});
