import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import {GoogleSigninButton,GoogleSignin} from '@react-native-google-signin/google-signin';
import {useDispatch} from 'react-redux';

// actions
import {loginAction} from '../modules/login';

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
  const googleSigninConfigure = () => {
    GoogleSignin.configure({
    });
  };

  useEffect(() => {
    googleSigninConfigure(); 
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={
        styles.container
      }
      >
        <GoogleSigninButton onPress= {()=>{
          // login
          dispatch(loginAction());
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

