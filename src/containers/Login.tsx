import React from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import {ThemeProvider, Input, Button} from 'react-native-elements';

interface Props {}
interface Theme {
  Button: {
    raised: boolean;
  };
}

const theme: Theme = {
  Button: {
    raised: true,
  },
};

export default function Login(props: Props) {
  return (
    <ThemeProvider theme={theme}>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Button title="Sign in with Google" style={styles.button} />
      </KeyboardAvoidingView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
  },
  input: {},
});
