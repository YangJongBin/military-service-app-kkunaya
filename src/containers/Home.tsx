import React from 'react';
import {StyleSheet, Text, View, Dimensions, Button, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

// action
import {getInit} from '../modules/init';

interface Props {}

function Home(props: Props) {
  const {width, height} = Dimensions.get('screen');
  const initValue = useSelector(state => state.init.value);
  const dispatch = useDispatch();

  return (
    <View style={[styles.container, {marginTop: 100}]}>
      <Text>{initValue}</Text>
      <Button
        title={'REDUX'}
        onPress={() => {
          dispatch(getInit('Success'));
        }}></Button>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {width: '100%', height: '100%', backgroundColor: 'white'},
});
