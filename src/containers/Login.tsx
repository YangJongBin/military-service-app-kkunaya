import React, {useEffect} from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView, SafeAreaView} from 'react-native';
import {ThemeProvider, Input, Button} from 'react-native-elements';
import {GoogleSignin, GoogleSigninButton} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

interface Props {}
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

const googleSigninConfigure = () => {
  GoogleSignin.configure({
  });
};


export default function Login(props : Props) {
  useEffect(() => {
    googleSigninConfigure();
  }, []);

  const onGoogleButtonPress = async () => {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    return auth().signInWithCredential(googleCredential);
  };


  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={
        styles.container
      }
      >
        <GoogleSigninButton onPress={onGoogleButtonPress} ></GoogleSigninButton>
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

