import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useSpring, animated} from '@react-spring/native';
import _ from 'lodash';
import dayjs from 'dayjs';

interface Props {
  nickName: string; // 닉네임
  holidays: string[];
  startDate: string; // 입대일
  endDate: string; // 전역일
}

const DetailComponent = (props: Props) => {
  const [fullServiceDay, setFullServiceDay] = useState<number>(0);
  const [currServiceDay, setCurrServiceDay] = useState<number>(0);
  const [remainingServiceDay, setRemainingServiceDay] = useState<number>(0);
  const [nextHolliday, setNextHoliday] = useState<number>(0);

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

  // day 계산 함수
  const calcDay = (date1:string, date2:string): number => {
    const formedDate1 = dayjs(date1, 'YYYYMMDD');
    const formedDate2 = dayjs(date2, 'YYYYMMDD');

    formedDate1.format('YYYY-MM-DD HH:mm:ss.SSS');
    formedDate2.format('YYYY-MM-DD HH:mm:ss.SSS');

    return _.chain(formedDate2.diff(formedDate1, 'day'))
      .toNumber()
      .add(1)
      .value();
  };

  // TODO: 전역 정보 계산
  useEffect(()=>{
    setFullServiceDay(calcDay(props.startDate, props.endDate)); // 전체 복무일
    setCurrServiceDay(calcDay(props.startDate, dayjs().format())); // 현재 복무일
    setRemainingServiceDay(calcDay(dayjs().format(), props.endDate)); // 남은 복무일
    setNextHoliday(0); // 다음 휴가 까지

    // 총 복무일
  }, [props, fullServiceDay, currServiceDay, remainingServiceDay, nextHolliday]);

  return (
    <View style={styles.container}>
      <View style={[styles.card , {flex: 2}]}>
        <View style={{flexDirection: 'column', flex:1}}>
          <View style={{flex: 4, flexDirection: 'row', padding: 5}}>
            <View style={{flex:2, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.nickNameText}>{props.nickName}</Text>
            </View>
            <View style={{flex:3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <View>
                <Text style={styles.startEndDateText}>입대일     {dayjs(props.startDate, 'YYYYMMDD').format('YYYY-MM-DD')}</Text>
              </View>
              <View>
                <Text style={styles.startEndDateText}>전역일     {dayjs(props.endDate, 'YYYYMMDD').format('YYYY-MM-DD')}</Text>
              </View>
            </View>
          </View>
          <View style={{flex: 3,backgroundColor: 'red'}}>
            <Gauge></Gauge>
          </View>
        </View>
      </View>
      <View style={styles.flexDirectionRow}>
        <View style={[styles.card, styles.allCenter, { flex: 1}]}>
          <Text>전체 복무일</Text>
          <Text>{fullServiceDay}</Text>
        </View>
        <View style={[styles.card, styles.allCenter, { flex: 1}]}>
          <Text>현재 복무일</Text>
          <Text>{currServiceDay}</Text>
        </View>
      </View>
      <View style={styles.flexDirectionRow}>
        <View style={[styles.card, styles.allCenter, { flex: 1}]}>
          <Text>남은 복무일</Text>
          <Text>{remainingServiceDay}</Text>
        </View>
        <View style={[styles.card, styles.allCenter, { flex: 1}]}>
          <Text>다음 휴가까지</Text>
          <Text>{nextHolliday}</Text>
        </View>
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
  allCenter: {
    justifyContent: 'center',
    alignItems: 'center'
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
