import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import asyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';

// action
import {selectSoldier} from '../modules/selectSoldier';

interface Props {
    
}

interface SoldierInfo {
  displayName: string
  email: string
  type: number
}

const SoldierList = (props: Props) => {
  const dispatch = useDispatch();
  const soldierInfo: SoldierInfo = useSelector(state => state.selectSoldier);
  
  return (
    <SafeAreaView>
      <Button title={'TEST SELECTED SOLDIER BUTTON'} onPress={()=>{
        asyncStorage.setItem('selectedSoldier', 'developer'); // FIXME: 사용자 email 저장 예정

        console.log('this ==>', soldierInfo);

        // TODO: set state selected soldier info
        dispatch(selectSoldier({email: 'hhi'}));
      }}></Button>
    </SafeAreaView>
  );
};

export default SoldierList;

const styles = StyleSheet.create({});
