import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Button,
} from 'react-native';
import {ThemeProvider} from 'react-native-elements';

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
        <TextInput placeholder="ID" style={styles.textInput}></TextInput>
        <TextInput placeholder="PW" style={styles.textInput}></TextInput>
        <Button title="Sign In" loading={false} style={styles.button} />
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
  textInput: {
    width: '100%',
    height: 30,
    backgroundColor: 'gray',
  },
});
