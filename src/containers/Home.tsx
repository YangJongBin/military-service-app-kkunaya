import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {TabView, ButtonGroup} from 'react-native-elements';

// action
import {getInit} from '../modules/init';

interface Props {}

export default function Home(props: Props) {
  const {width, height} = Dimensions.get('screen');
  const initValue = useSelector(state => state.init.value);
  const dispatch = useDispatch();

  const [tabIndex, setTabIndex] = useState(0);
  // FIXME: customTab
  const customTab = [
    {
      element: () => <Text>1</Text>,
    },
    {
      element: () => <Text>2</Text>,
    },
    {
      element: () => <Text>3</Text>,
    },
    {
      element: () => <Text>4</Text>,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* TODO: custom header */}
      <View
        style={{width: '100%', height: 50, backgroundColor: 'yellow'}}></View>
      <View style={styles.publicView}>
        <View style={styles.customTabView}>
          <ButtonGroup
            onPress={setTabIndex}
            selectedIndex={tabIndex}
            buttons={customTab}></ButtonGroup>
        </View>
        <View style={styles.publicContentView}>
          <View style={{flex: 1, borderWidth: 1}}></View>
          <View style={{flex: 2, borderWidth: 1}}></View>
          <View style={{flex: 1, borderWidth: 1}}></View>
        </View>
      </View>
      <View style={styles.componentView}>
        {/* FIXME: component 작업 해야함. */}
        <TabView value={tabIndex} onChange={setTabIndex}>
          <TabView.Item
            style={{width: '100%', backgroundColor: 'red'}}></TabView.Item>
          <TabView.Item
            style={{width: '100%', backgroundColor: 'blue'}}></TabView.Item>
          <TabView.Item
            style={{width: '100%', backgroundColor: 'green'}}></TabView.Item>
          <TabView.Item
            style={{width: '100%', backgroundColor: 'purple'}}></TabView.Item>
        </TabView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {width: '100%', height: '100%', backgroundColor: 'white'},
  publicView: {
    flex: 2,
    padding: 5,
    backgroundColor: 'skyblue', //FIXME: dlelete
  },
  componentView: {
    flex: 3,
    backgroundColor: 'gray', //FIXME: delete
  },
  customTabView: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1, //FIXME: delete
  },
  publicContentView: {
    flex: 3,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1, //FIXME: delete
  },
});
