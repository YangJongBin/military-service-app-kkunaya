import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    
}

const SettingComponent = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.card , {flex: 1}]}></View>
    </View>
  );
};

export default SettingComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexDirectionRow:{
    flexDirection:'row', 
    flex: 2
  },
  card:{ 
    backgroundColor: 'white',
    borderRadius: 15,
    margin:5,
    shadowColor:'black',
    shadowRadius: 5,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5
    }
  }
});
