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
        <Input placeholder="ID" style={styles.input}></Input>
        <Input placeholder="PW" style={styles.input}></Input>
        <Button title="Sign In" style={styles.button} />
      </KeyboardAvoidingView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
  },
  input: {},
});
