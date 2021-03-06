import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {TabView, ButtonGroup} from 'react-native-elements';
import days from 'dayjs';

// action
import {selectUserInfoAction} from '../modules/selectUserInfo/actions';

// components
import SoldierThree from '../components/SoldierThree';
import MyHeader from '../components/MyHeader';
import DetailComponent from '../components/DetailComponent';
import ScheduleComponent from '../components/ScheduleComponent';
import CalendarComponent from '../components/CalendarComponent';
import SettingComponent from '../components/SettingComponent';
import { selectUserInfo } from '../modules/selectUserInfo/funcs';

interface UserInfo {
  displayName : string;
  type: number;
  email: string;
  uid: string;
}

export default function Home() {
  const {width, height} = Dimensions.get('screen');
  const defaultUserInfo :UserInfo  = useSelector(state => state.updateUserInfo.userInfo );
  const selectedUserInfo = useSelector(state => state.selectUserInfo.userInfo );
  const dispatch = useDispatch();

  
  // TODO: 유저 세팅 
  useEffect(() => {
    dispatch(selectUserInfoAction.request({
      uid: defaultUserInfo.uid,
      tableNmae: 'soldier'
    }));
  }, []);
  
  console.log('@@ selectedUserInfo==>', selectedUserInfo);
  const [tabIndex, setTabIndex] = useState(0);
  // FIXME: customTab
  const customTab = [
    {
      element: () => <Text>1</Text>
    }, {
      element: () => <Text>2</Text>
    }, {
      element: () => <Text>3</Text>
    }, {
      element: () => <Text>4</Text>
    },
  ];

  return (
    <SafeAreaView style={
      styles.container
    }>
      <MyHeader />
      <View style={
        styles.publicView
      }>
        <View style={
          styles.customTabView
        }>
          <ButtonGroup onPress={setTabIndex}
            selectedIndex={tabIndex}
            buttons={customTab}></ButtonGroup>
        </View>
        <View style={
          styles.publicContentView
        }>
          {/* Left */}
          <View style={[styles.publicContentSideView, {alignItems:'flex-start'}]}>
            <View style={[styles.card, { width:70, height: 70, marginLeft:0 }]}>
              <Text>{selectedUserInfo.class}</Text>
            </View>
            <View style={[styles.card, { width:70, height: 70, marginLeft:0 }]}>
              <Text>{selectedUserInfo.step}</Text>
            </View>
          </View>
          {/* Center */}
          <View style={
            {
              flex: 2,
              borderWidth: 1,
            }
          }>
            <SoldierThree></SoldierThree>
          </View>
          {/* Right */}
          <View style={[styles.publicContentSideView, {alignItems:'flex-end'}]}>
            <View style={[styles.card, { width:70, height: 70, marginRight:0 }]}>
              <Text>{selectedUserInfo.emotion}</Text>
            </View>
            <View style={[styles.card, { width:70, height: 70, marginRight:0 }]}>
              <Text>{selectedUserInfo.regionCode}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={
        styles.componentView
      }>
        {/* TODO:: component 작업 해야함. */}
        <TabView value={tabIndex}
          onChange={setTabIndex}>
          <TabView.Item style={styles.tabViewItem}>
            <DetailComponent 
              nickName={selectedUserInfo.nickName}
              startDate={selectedUserInfo.startDate}
              endDate={selectedUserInfo.endDate}
            />
          </TabView.Item>
          <TabView.Item style={styles.tabViewItem}>
            <ScheduleComponent/>
          </TabView.Item>
          <TabView.Item style={styles.tabViewItem}>
            <CalendarComponent/>
          </TabView.Item>
          <TabView.Item style={styles.tabViewItem}>
            <SettingComponent/>
          </TabView.Item>
        </TabView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  publicView: {
    flex: 2,
    padding: 5,
  },
  componentView: {
    flex: 3,
  },
  customTabView: {
    flex: 1,
    justifyContent: 'center',
  },
  publicContentView: {
    flex: 3,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tabViewItem: {
    flex: 1,
    paddingHorizontal: 20
  },
  publicContentSideView: {
    flex:1,
    justifyContent: 'space-around',
    borderWidth:1
  },
  card: { 
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
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
