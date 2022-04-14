import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import {GoogleSigninButton,GoogleSignin} from '@react-native-google-signin/google-signin';
import {useDispatch, useSelector} from 'react-redux';

// actions
import {loginAction} from '../modules/login/actions';

import {RootState} from '../modules';

interface Theme {
    Button: {
        raised: boolean;
    };
}

const theme: Theme = {
  Button: {
    raised: true
  }
};

export default function Login() {
  const dispatch = useDispatch();
  const {isLoading, userInfo} = useSelector((state: RootState) => state.login);
  const googleSigninConfigure = () => {
    GoogleSignin.configure({
    });
  };

  // 구글 로그인 초기 옵션 세팅 : 옵션이 없어도 세팅하지 않으면 오류 발생.
  useEffect(() => {
    googleSigninConfigure(); 
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <Text style={{marginTop: 50}}>{JSON.stringify(userInfo)}</Text>
      <SafeAreaView style={
        styles.container
      }
      >
        <GoogleSigninButton onPress= {()=>{
          dispatch(loginAction.request());
        }} ></GoogleSigninButton>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: '100%'
  },
  input: {}
});

