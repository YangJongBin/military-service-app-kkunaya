import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useChain, useSpring, animated} from '@react-spring/native';


// TODO:
interface Props {
  nickName: string; // 닉네임
  holidays: string[];
  startDate: string; // 입대일
  endDate: string; // 전역일
}

const DetailComponent = (props: Props) => {
  const Gauge = () => {
    const AnimatedView = animated(View);
    const gaugeWidth = useSpring(() => ({
      from: {width: 0},
      to: {width: 100}
    }));

    // TODO: 100% 실제 width 길이로 환산해야함.
    
    return <View style={{flex:1, backgroundColor: 'gray', marginHorizontal: 10, marginBottom:10}}>
      <AnimatedView style={[gaugeWidth, { height: '100%', backgroundColor: 'green'}]}></AnimatedView>
    </View>;
  };

  // TODO: 전역 정보 계산
  useEffect(()=>{

  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.card , {flex: 2}]}>
        <View style={{flexDirection: 'column', flex:1}}>
          <View style={{flex: 4, flexDirection: 'row', padding: 5}}>
            <View style={{flex:2, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.nickNameText}>{props.nickName}</Text>
            </View>
            <View style={{flex:3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <View><Text style={styles.startEndDateText}>입대일     {props.startDate}</Text></View>
              <View><Text style={styles.startEndDateText}>전역일     {props.endDate}</Text></View>
            </View>
          </View>
          <View style={{flex: 3,backgroundColor: 'red'}}>
            <Gauge></Gauge>
          </View>
        </View>
      </View>
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
  },
  nickNameText: {
    fontWeight: 'bold',
    fontSize:20
  },
  startEndDateText: {
    fontWeight: 'bold',
    margin: 5
  },
});
