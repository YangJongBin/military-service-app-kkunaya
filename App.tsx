import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Page from './src/containers/Navi';
import store from './src/store';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Page />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
