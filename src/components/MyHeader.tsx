import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    
}

const MyHeader = (props: Props) => {
  return (
    <View style={styles.header}>
      <Text>ㄲㄴㅇ</Text>
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
