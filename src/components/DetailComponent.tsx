import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// TODO:
interface Props {
  nickName: string; // 닉네임
  class: string; // 계급
  step: string; // 호봉
  regionCode: string; // 지역 코드 
  holidays: string[];
  startDate: string; // 입대일
  endDate: string; // 전역일
}

const DetailComponent = (props: Props) => {

  return (
    <View style={styles.container}>
      <View style={[styles.card , {flex: 2}]}><Text></Text></View>
      <View style={styles.flexDirectionRow}>
        <View style={[styles.card, { flex: 1}]}></View>
        <View style={[styles.card, { flex: 1}]}></View>
      </View>
      <View style={styles.flexDirectionRow}>
        <View style={[styles.card, { flex: 1}]}></View>
        <View style={[styles.card, { flex: 1}]}></View>
      </View>
    </View>
  );
};

export default DetailComponent;

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
