import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useChain} from '@react-spring/native';


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
  const [gaugeWidth, setGaugeWidth] = useState<number>(0);

  const Gauge = () => {
    return <View style={{flex:1, backgroundColor: 'gray', marginHorizontal: 10, marginBottom:10}}>
      <View style={{width: '50%', height: gaugeWidth, backgroundColor: 'green'}}></View>
    </View>;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.card , {flex: 2}]}>
        <View style={{flexDirection: 'column', flex:1}}>
          <View style={{flex: 4, flexDirection: 'row', padding: 5}}>
            <View style={{flex:2, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.nickNameText}>양군인</Text>
            </View>
            <View style={{flex:3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <View><Text style={styles.startEndDateText}>입대일     2022.07.05</Text></View>
              <View><Text style={styles.startEndDateText}>전역일     2022.07.06</Text></View>
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
