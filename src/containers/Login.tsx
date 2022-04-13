import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import {GoogleSigninButton,GoogleSignin} from '@react-native-google-signin/google-signin';
import {useDispatch, useSelector} from 'react-redux';

// actions
import {testAction} from '../modules/login/actions';

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
  const {isLoading} = useSelector(state => state.login);
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
      <SafeAreaView style={
        styles.container
      }
      >
        <Text>{isLoading}</Text>
        <GoogleSigninButton onPress= {()=>{
          // login disaptch
          dispatch(testAction.request());

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

